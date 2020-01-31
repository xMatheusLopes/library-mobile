// React
import React, { useState } from 'react'
import { StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native'

// Native Base
import {    
    Content,  
    Form, 
    Input,
    Icon
} from 'native-base';

// Styles
import { 
    Container, 
    ElevatedView, 
    BookMarker,
    Card, 
    H2, 
    TextCenter, 
    TextAccess, 
    Item, 
    ViewAccessButton,
    Button
 } from './Styles';
 import { content, scrollview } from '../utils/styles/Styles'

// General
import { api } from '../utils/services/api';
import { setSession } from '../utils/services/session';
import User from '../user/user.model';

interface login {
    email: string,
    password: string
}

const Login = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = async () => {
        let data: login = { email, password }

        try {
            const response = await api.post('login', data);
            handleUser(response.data);
        } catch(e) {
            handleError(e);
        }
    }

    const handleUser = (data: User) => {
        if (data) {
            setSession(data);
            navigation.navigate('Dashboard');
        }
    }

    const handleError = (e: string) => {
        console.log(e);
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollview}>
            <Container>
                <Content contentContainerStyle={styles.content}>
                    <KeyboardAvoidingView>
                        <ElevatedView>
                            <BookMarker
                                source={require('../../assets/img/marker.png')}
                            />
                        </ElevatedView>
                        <Card>
                            <H2>Entrar</H2>
                            <TextCenter>Coloque suas credenciais para acessar</TextCenter>
                            <Form>
                                <Item>
                                    <Icon type="FontAwesome" active name='user' />
                                    <Input autoCapitalize="none" placeholder="E-mail" onChangeText={(text) => setEmail(text)}/>
                                </Item>
                                <Item>
                                    <Icon type="FontAwesome" active name='key' />
                                    <Input autoCapitalize="none" secureTextEntry={true} placeholder="Senha" onChangeText={(text) => setPassword(text)}/>
                                </Item>
                                <ViewAccessButton>
                                    <Button onPress={() => submit()} full>
                                        <TextAccess>ACESSAR</TextAccess>
                                    </Button>
                                </ViewAccessButton>
                            </Form>
                        </Card>
                    </KeyboardAvoidingView>
                </Content>
            </Container>
        </ScrollView>
    )
    
}

Login.navigationOptions = {
    headerShown: false
}

export default Login;

const styles = StyleSheet.create({ content, scrollview });



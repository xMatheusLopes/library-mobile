import React, { useState } from 'react'
import { StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native'

import { Background } from './Styles';
import { 
    Button, 
    Text, 
    Input, 
    Container, 
    Content, 
    Card, 
    Form, 
    Item,
    H2,
    Icon
} from 'native-base';

import { Theme } from '../../Theme';
import { api } from '../utils/services/api';
import { setSession, getSession } from '../utils/services/session';

interface login {
    email: string,
    password: string
}

const Login = () => {
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

    const handleUser = async (data) => {
        if (data) {
            setSession(data);
        }
    }

    const handleError = (e) => {
        console.log(e);
    }

    return (
        <Container>
            <Background>
                <Content contentContainerStyle={styles.content}>
                    <KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: 'center' }}>
                        <Image
                            style={styles.bookMarker}
                            source={require('../../assets/img/marker.png')}
                        />
                        <Card style={styles.card}>
                            <H2 style={styles.h2}>Entrar</H2>
                            <Text style={styles.textCenter}>Coloque suas credenciais para acessar</Text>
                            <Form>
                                <Item style={styles.input}>
                                    <Icon type="FontAwesome" active name='user' />
                                    <Input autoCapitalize="none" placeholder="E-mail" onChangeText={(text) => setEmail(text)}/>
                                </Item>
                                <Item style={styles.input}>
                                    <Icon type="FontAwesome" active name='key' />
                                    <Input autoCapitalize="none" secureTextEntry={true} placeholder="Senha" onChangeText={(text) => setPassword(text)}/>
                                </Item>
                                <View style={styles.p8}>
                                    <Button onPress={() => submit()} full style={styles.button}>
                                        <Text style={styles.bold}>ACESSAR</Text>
                                    </Button>
                                </View>
                            </Form>
                        </Card>
                    </KeyboardAvoidingView>
                </Content>
            </Background>
        </Container>
    )
    
}

Login.navigationOptions = {
    headerShown: false
}

export default Login;

const styles = StyleSheet.create({
    content: {
        padding: 16,
        flex: 1,
        justifyContent: 'center'
    },
    bookMarker: {
        width: 50, 
        height: 50,
        bottom: -35,
        left: 10,
        zIndex: 1,
        resizeMode: 'contain'
    },
    input: {
        backgroundColor: '#bfbfbf',
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginRight: 14,
        borderRadius: 8,
        marginBottom: 14
    },
    card: {
        padding: 8,
        borderRadius: 8,
        shadowColor: "#f4a600",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 10.27,

        elevation: 10,
    },
    p8: {
        padding: 8
    },
    h2: {
        textAlign: 'center',
        marginTop: 24
    },
    button: {
        backgroundColor: Theme.Accent
    },
    textCenter: {
        textAlign: 'center',
        marginBottom: 24,
        color: 'grey'
    },
    bold: {
        fontWeight: 'bold'
    }
});

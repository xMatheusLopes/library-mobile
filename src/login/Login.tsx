// React
import React, { useState } from 'react'
import { StyleSheet, KeyboardAvoidingView, ScrollView, StatusBar, View } from 'react-native'

// Native Base
import {    
    Toast
} from 'native-base';

// Styles
import styled from 'styled-components/native';
import { 
    Container, 
    ElevatedView, 
    BookMarker,
    Card, 
    H2, 
    TextCenter
 } from './Styles';

 import { content, scrollview } from '../utils/styles/Styles'
 import { Theme } from '../../Theme';

// General
import { api } from '../utils/services/api';
import { setSession } from '../utils/services/session';
import User from '../user/user.model';

// Formulário
import * as Yup from 'yup';
import MyForm from '../components/MyForm';

const Login = ({navigation}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = async (values) => {
        try {
            setIsSubmitting(true);
            const response = await api.post('login', values);
            handleUser(response.data);
            setIsSubmitting(false);
        } catch(e) {
            setIsSubmitting(false);
            handleError(e);
        }
    }

    const handleUser = async (data: User) => {
        if (data) {
            setSession(data);
            navigation.navigate('Drawer', { screen: 'Library' });
        } else {
            Toast.show({
                text: "E-mail e/ou senha inválido",
                buttonText: "Ok",
                duration: 5000
            });
        }
    }

    const handleError = (e: string) => {
        Toast.show({
            text: "Oops, algo deu errado na requisição, tente novamente mais tarde!",
            buttonText: "Ok",
            duration: 5000
        });
    }

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email('E-mail inválido')
            .required('Digite o seu e-mail'),
        password: Yup.string()
            .required('Digite a sua senha')
    })

    const items = [
        { field: 'email', icon: 'user', placeholder: 'Digite aqui seu e-mail', key: 'user' },
        { field: 'password', icon: 'key', placeholder: 'Digite aqui sua senha', key: 'pass', options: { secureTextEntry: true } }
    ]

    return (
        <ScrollView contentContainerStyle={styles.scrollview}>
            <StatusBar barStyle="dark-content" backgroundColor={Theme.Primary}/>
            <Container>
                <View style={styles.content}>
                    <KeyboardAvoidingView>
                        <ElevatedView>
                            <BookMarker source={require('../../assets/img/marker.png')} />
                        </ElevatedView>
                        <Card>
                            <H2>Entrar</H2>
                            <TextCenter>Coloque suas credenciais para acessar</TextCenter>
                            <MyForm schema={LoginSchema} submit={submit} isSubmitting={isSubmitting} items={items} />
                        </Card>
                    </KeyboardAvoidingView>
                </View>
            </Container>
        </ScrollView>
    )
    
}

export default Login;

const styles = StyleSheet.create({ content, scrollview });



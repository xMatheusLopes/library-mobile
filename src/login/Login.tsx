// React
import React, { useState } from 'react'
import { StyleSheet, KeyboardAvoidingView, ScrollView, StatusBar } from 'react-native'

// Native Base
import {    
    Content,  
    Form, 
    Input,
    Toast,
    Header, 
    Left, 
    Right, 
    Body,
    Title,
    StyleProvider,
    Button as NBButton, 
    Text as NBText
} from 'native-base';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// Styles
import styled from 'styled-components';
import { 
    Container, 
    ElevatedView, 
    BookMarker,
    Card, 
    H2, 
    TextCenter, 
    Item, 
    ViewAccessButton,
    ActivityIndicator,
    TextError,
    ViewItem
 } from './Styles';

 import { content, scrollview } from '../utils/styles/Styles'
 import { Theme } from '../../Theme';

// General
import { api } from '../utils/services/api';
import { setSession } from '../utils/services/session';
import User from '../user/user.model';

// Formulário
import { Formik } from 'formik';
import * as Yup from 'yup';

interface login {
    email: string,
    password: string
}

const Login = ({navigation}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const AccessButton = ({ handleSubmit, errors }) => {
        const hasError = Object.keys(errors).length !== 0;

        return (
            <NBButton dark disabled={isSubmitting || hasError} onPress={handleSubmit} block>
                <NBText>ACESSAR</NBText>
                <ActivityIndicator size="large" color={Theme.Accent} animating={isSubmitting} />
            </NBButton>
        )
    }

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

    return (
        <ScrollView contentContainerStyle={styles.scrollview}>
            <StatusBar barStyle="dark-content" />
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

                            <Formik
                                initialValues={{email: '', password: ''}}
                                onSubmit={(values) => submit(values)}
                                validationSchema={LoginSchema}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit
                                }) => (
                                    <Form>
                                        <ViewItem>
                                            <Item error={errors.email && touched.email}>
                                                <FontAwesome5 active name={'user'} solid/>
                                                <Input 
                                                    autoCapitalize="none" 
                                                    placeholder="E-mail" 
                                                    onChangeText={handleChange('email')}
                                                    onBlur={handleBlur('email')}
                                                    value={values.email}
                                                />
                                            </Item>
                                            <TextError>{errors.email && touched.email && errors.email}</TextError>
                                        </ViewItem>

                                        <ViewItem>
                                            <Item error={errors.password && touched.password}>
                                                <FontAwesome5 active name={'key'} />
                                                <Input 
                                                    autoCapitalize="none" 
                                                    secureTextEntry={true} 
                                                    placeholder="Senha" 
                                                    onChangeText={handleChange('password')}
                                                    onBlur={handleBlur('password')}
                                                    value={values.password}
                                                />
                                            </Item>
                                            <TextError>{errors.password && touched.password && errors.password}</TextError>
                                        </ViewItem>

                                        <ViewAccessButton>
                                            <AccessButton handleSubmit={handleSubmit} errors={errors}></AccessButton>
                                        </ViewAccessButton>
                                    </Form>
                                )}
                            </Formik>
                        </Card>
                    </KeyboardAvoidingView>
                </Content>
            </Container>
        </ScrollView>
    )
    
}

export default Login;

const styles = StyleSheet.create({ content, scrollview });



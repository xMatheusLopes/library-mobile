import React, { Component } from 'react'
import { Text, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import { Background, Container, Card } from './Styles';

export default class Login extends Component {
    static navigationOptions = {
        headerShown: false,
    };

    render() {
        return (
            <Background>
                <StatusBar barStyle="light-content" />
                <SafeAreaView>
                    <Container>
                        <Card>
                            <Text>Teste</Text>
                        </Card>
                    </Container>
                </SafeAreaView>
            </Background>
        )
    }
}

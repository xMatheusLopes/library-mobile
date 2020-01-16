import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Login extends Component {
    static navigationOptions = {
        headerShown: false,
    };

    render() {
        return (
            <SafeAreaView>
                <Text> textInComponent </Text>
            </SafeAreaView>
        )
    }
}

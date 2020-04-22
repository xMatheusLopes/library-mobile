// React
import React, { useEffect } from 'react'
import { ActivityIndicator, StatusBar } from 'react-native'

// Style
import { Theme } from '../Theme'
import styled from 'styled-components'

// Services
import { getSession } from './utils/services/session'

const boot = ({navigation}) => {
    
    useEffect(() => {
        async function handleSession() {
            await getSession()  
            ? navigation.navigate('Library')
            : navigation.navigate('Login')
        }

        handleSession();
    }, []);

    return (
        <View>
            <StatusBar barStyle="light-content" />
            <ActivityIndicator size="large" color={Theme.Primary}></ActivityIndicator>
        </View>
    )
}

const View = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${Theme.Dark};
`;

export default boot;


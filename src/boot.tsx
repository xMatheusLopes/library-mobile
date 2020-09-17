// React
import React, { useEffect } from 'react'
import { ActivityIndicator, StatusBar } from 'react-native'

// Style
import { Theme } from '../Theme'
import styled from 'styled-components/native'

// Services
import { getSession, checkSession, renewSession } from './utils/services/session'

const boot = ({navigation}) => {

    const sessionAction = async () => {
        const session = await checkSession()
        if (!session) {
            const renew = await renewSession();

            renew 
                ? navigation.navigate('Drawer', { screen: 'Library' })
                : navigation.navigate('Login')
        } else {
            navigation.navigate('Drawer', { screen: 'Library' })
        }
    }

    const handleSession = async () => {
        if (await getSession()) {
            sessionAction()

            setInterval(async () => {
                sessionAction()
            }, 60000)
        } else {
            navigation.navigate('Login')
        }
    }

    useEffect(() => {
        handleSession()
    }, [])

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


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { useEffect } from 'react'

import { createAppContainer } from 'react-navigation';
import AppStack from './src/screens';

import 'react-native-gesture-handler';
import { Root, StyleProvider } from 'native-base';

import getTheme from './native-base-theme/components';
import custom from './native-base-theme/variables/custom';

const AppNavigator = createAppContainer(AppStack);

import { checkSession, renewSession, getSession, removeSession } from './src/utils/services/session';
import navigation from './src/utils/services/navigation';

const App = () => {
    useEffect(() => {
        const sessionAction = async () => {
            const session = await checkSession()
            if (!session)
                await renewSession()
        }

        const handleSession = async () => {
            if (await getSession()) {
                sessionAction()

                setInterval(async () => {
                    sessionAction()
                }, 60000)
            }
        }

        handleSession()
    }, [])

    return (
        <StyleProvider style={getTheme(custom)}>
            <Root>
                <AppNavigator ref={navigatorRef => navigation.setTopLevelNavigator(navigatorRef) } />
            </Root>
        </StyleProvider>
    );
}
export default App;
    

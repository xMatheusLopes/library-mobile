/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react'

import { createAppContainer } from 'react-navigation';
import AppStack from './src/screens';

import 'react-native-gesture-handler';
import { Root, StyleProvider } from 'native-base';

import getTheme from './native-base-theme/components';
import custom from './native-base-theme/variables/custom';

const AppNavigator = createAppContainer(AppStack);

export default () => 
    <StyleProvider style={getTheme(custom)}>
        <Root>
            <AppNavigator />
        </Root>
    </StyleProvider>
;

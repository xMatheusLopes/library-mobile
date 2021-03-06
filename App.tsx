/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 * @flow strict-local
 */
import React from 'react';

import 'react-native-gesture-handler';
import { Root, StyleProvider } from 'native-base';

import getTheme from './native-base-theme/components';
import custom from './native-base-theme/variables/custom';

import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
    return (
        <StyleProvider style={getTheme(custom)}>
            <Root>
                <AppNavigation />
            </Root>
        </StyleProvider>
    );
}
export default App;
    

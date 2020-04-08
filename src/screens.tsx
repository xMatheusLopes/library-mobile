import React from 'react';

// Navigation
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";

// Stack
import Login from './login/Login';
import Boot from './boot';

// Drawer
import { DashboardNavigator } from './dashboard/Dashboard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { Theme } from '../Theme';
import styled from 'styled-components'

// Session
import { getSession } from './utils/services/session';

const CustomDrawerComponent = (props) => (
    <View>
        <SafeAreaView>
            <ScrollView>
                <DrawerItems labelStyle={{ color: Theme.Primary }} {...props} />
            </ScrollView>
        </SafeAreaView>
    </View>
)

const DrawerScreens = createDrawerNavigator({
    Dashboard: DashboardNavigator,
}, {
    initialRouteName: 'Dashboard',
    contentComponent: CustomDrawerComponent
});

const AppStack = createStackNavigator({
    DrawerScreens: {
        screen: DrawerScreens,
        navigationOptions: {
            headerShown: false
        }
    },
    Login: {
        screen: Login
    },
    Boot: {
        screen: Boot,
        navigationOptions: {
            headerShown: false
        }
    }
  }, {
    initialRouteName: 'Boot',
});

export default AppStack;

const View = styled.View`
    flex: 1;
    background-color: ${Theme.Dark};
`;
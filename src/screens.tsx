import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from "react-navigation-drawer";

import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';

const DashboardNavigator = createStackNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            title: 'Dashboard'
        }
    }
});

const drawerScreens = createDrawerNavigator({
    Dashboard: DashboardNavigator,
}, {
    initialRouteName: 'Dashboard'
});

const AppStack = createStackNavigator({
    drawerScreens: {
        screen: drawerScreens,
        navigationOptions: {
            headerShown: false
        }
    },
    Login: {
      screen: Login
    }
  }, {
    initialRouteName: 'Login',
});

export default AppStack;
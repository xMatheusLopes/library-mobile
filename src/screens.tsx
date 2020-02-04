// Navigation
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from "react-navigation-drawer";

// Stack
import Login from './login/Login';
import Boot from './boot';

// Drawer
import { DashboardNavigator } from './dashboard/Dashboard';

// Session
import { getSession } from './utils/services/session';

const DrawerScreens = createDrawerNavigator({
    Dashboard: DashboardNavigator,
}, {
    initialRouteName: 'Dashboard'
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
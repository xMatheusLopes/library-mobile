// Navigation
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from "react-navigation-drawer";

// Stack
import Login from './login/Login';

// Drawer
import { DashboardNavigator } from './dashboard/Dashboard';

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
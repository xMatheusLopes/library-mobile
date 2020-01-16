import { createStackNavigator } from 'react-navigation-stack';
import Login from './login/Login';

const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: Login
        }
    },
    {
        initialRouteName: 'Login'
    }
);

export default AppNavigator;
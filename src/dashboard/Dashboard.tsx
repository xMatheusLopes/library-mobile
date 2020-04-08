import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import { createStackNavigator } from 'react-navigation-stack';

import { removeSession } from '../utils/services/session';
import { Theme, ThemeHeader } from '../../Theme';
import { Header } from '../layout/Header';

const Dashboard = ({navigation}) => {
    useEffect(() => {
        // removeSession()
    }, []);
    return (
        <View style={{ flex: 1 }}>
            <Header navigation={navigation} Right={null}/>
            <View style={{ flex: 1, backgroundColor: Theme.DarkContent }}>

            </View>
        </View>
    )
}

Dashboard.navigationOptions = {
    headerShown: false
}

export const DashboardNavigator = createStackNavigator({
    Dashboard: { screen: Dashboard }
});

export default Dashboard

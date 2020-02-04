import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import { createStackNavigator } from 'react-navigation-stack';

import { removeSession } from '../utils/services/session';

const Dashboard = () => {
    useEffect(() => {
        // removeSession()
    }, []);
    return (
        <View>
            <Text></Text>
        </View>
    )
}

Dashboard.navigationOptions = {
    title: 'Dashboard'
}

export const DashboardNavigator = createStackNavigator({
    Dashboard: { screen: Dashboard }
});

export default Dashboard

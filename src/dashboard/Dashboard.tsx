import React from 'react'
import { View, Text } from 'react-native'

import { createStackNavigator } from 'react-navigation-stack';

const Dashboard = () => {
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

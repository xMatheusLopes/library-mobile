import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from '../login/Login';
import Library from '../library/Library';
import Book from '../book/Book';
import ListBooks from '../book/ListBooks';
import CustomDrawer from './CustomDrawer';
import boot from '../boot';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const BookStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="ListBook" options={{ headerShown: false }} component={ListBooks} />
        <Stack.Screen name="Book" options={{ headerShown: false }} component={Book} />
    </Stack.Navigator>
);

const DefaultDrawer = () => (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Library" component={Library} />
        <Drawer.Screen name="Livros" component={BookStack} />
    </Drawer.Navigator>
);

const AppNavigation = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Boot" options={{ headerShown: false }} component={boot} />
            <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
            <Stack.Screen name="Drawer" options={{ headerShown: false }} component={DefaultDrawer} />
        </Stack.Navigator>      
    </NavigationContainer>
)

export default AppNavigation;

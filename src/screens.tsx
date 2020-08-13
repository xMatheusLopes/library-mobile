import React from 'react';

import { Text, StyleSheet } from 'react-native';

// Navigation
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";

// Stack
import Login from './login/Login';
import Boot from './boot';
import Book from './book/Book';

// Drawer
import { LibraryNavigator } from './library/Library';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Theme } from '../Theme';
import styled from 'styled-components'

// Session
import { removeSession } from './utils/services/session';
import { ListBooksNavigator } from './book/ListBooks';
import { permissions } from './permissions';

const CustomDrawerComponent = (props) => (
    <View>
        <SafeAreaView>
            <ScrollView>
                <DrawerItems labelStyle={styles.drawerItems} {...props} />
                <TouchableOpacity
                    onPress={ () => removeSession() }>
                    <Text style={styles.drawerItems}>Sair</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    </View>
)

const styles = StyleSheet.create({
    drawerItems: {
        color: Theme.Primary,
        padding: 16,
        margin: 0,
        fontWeight: '600'
    }
})

// Items of menu
const items = {
    Biblioteca: LibraryNavigator,
    Livros: ListBooksNavigator
};

// TODO get from logged user
const myProfileUser = 1;

for (const key in items) {
    if (!permissions[key].includes(myProfileUser)) {
        delete items[key];
    }
}

const DrawerScreens = createDrawerNavigator(items, {
    initialRouteName: 'Biblioteca',
    unmountInactiveRoutes: true,
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
    Book: {
        screen: Book
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
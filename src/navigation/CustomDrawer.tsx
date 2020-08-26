import React from 'react';
import { Theme } from '../../Theme';
import { removeSession } from '../utils/services/session';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, useIsDrawerOpen } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

const CustomDrawer = (props) => {
    const navigation = useNavigation()
    const isDrawerOpen = useIsDrawerOpen();

    return (
        <DrawerContentScrollView style={{ flex:1, backgroundColor: Theme.Dark }} {...props}>
        <DrawerItemList activeTintColor={Theme.Primary} inactiveTintColor={Theme.Primary} {...props} />
        <StatusBar barStyle={isDrawerOpen ? 'light-content' : 'dark-content'} />
        <DrawerItem
            activeTintColor={Theme.Primary} 
            inactiveTintColor={Theme.Primary}
            label="Sair"
            onPress={() => {
                const remove = removeSession()
                if (remove)
                    navigation.navigate('Login')
            }}
        />
        </DrawerContentScrollView>
    )
}

export default CustomDrawer;
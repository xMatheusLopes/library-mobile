import React from 'react';
import { Theme } from '../../Theme';
import { removeSession } from '../utils/services/session';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = (props) => {
    const navigation = useNavigation()

    return (
        <DrawerContentScrollView style={{ flex:1, backgroundColor: Theme.Dark }} {...props}>
        <DrawerItemList activeTintColor={Theme.Primary} inactiveTintColor={Theme.Primary} {...props} />
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
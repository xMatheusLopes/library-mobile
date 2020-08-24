import React from 'react';

import { Left, Title, Body, Button, Header as NBHeader, Right as NBRight } from 'native-base';
import { Theme } from '../../Theme';
import { StatusBar, ImageBackground } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native'; 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Header = ({Right, HeaderTitle, BackButton = false, NavigationParams = null}) => {
    if (!Right) {
        Right = NBRight
    }

    const navigation = useNavigation();

    const LeftButton = () => {
        if (BackButton) {
            return (
                <Left>
                    <Button
                    transparent
                    onPress={() => navigation.goBack()}>
                    <FontAwesome5 style={{ fontSize: 22, marginLeft: 10, color: Theme.Dark }} name={"arrow-left"} />
                    </Button>
                </Left>
            )
        } else {
            return (
                <Left>
                    <Button
                    transparent
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <FontAwesome5 style={{ fontSize: 22, marginLeft: 10, color: Theme.Dark }} name={"bars"} />
                    </Button>
                </Left>
            )
        }
    }

    return (
        <ImageBackground source={require('../../assets/img/bg-header.png')} style={{ width: '100%', height: 120 }}>
            <NBHeader style={{ backgroundColor: 'transparent', borderBottomWidth: 0, marginTop: -25}}>
                <StatusBar barStyle="dark-content" />
                <LeftButton />
                <Body>
                    <Title style={{ color: Theme.Dark }}>{HeaderTitle}</Title>
                </Body>
                <Right />
            </NBHeader>
        </ImageBackground>
    );
}

export default Header;
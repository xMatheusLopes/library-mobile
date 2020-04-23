import React from 'react';

import { Left, Icon, Title, Body, Button, Header as NBHeader, Right as NBRight } from 'native-base';
import { Theme } from '../../Theme';
import { StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';

const Header = ({navigation, Right, HeaderTitle}) => {
    if (!Right) {
        Right = NBRight
    }
    return (
        <NBHeader style={{ backgroundColor: Theme.Dark, borderBottomWidth: 0}}>
            <StatusBar barStyle="light-content" />
            <Left>
                <Button
                transparent
                onPress={() => navigation.toggleDrawer()}>
                <Icon type="FontAwesome5" style={{ fontSize: 22, marginLeft: 10, color: Theme.Primary }} name="bars" />
                </Button>
            </Left>
            <Body>
                <Title style={{ color: Theme.Primary }}>{HeaderTitle}</Title>
            </Body>
            <Right />
        </NBHeader>
    );
}

export default withNavigation(Header);
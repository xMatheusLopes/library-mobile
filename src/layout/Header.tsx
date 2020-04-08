import React from 'react';

import { Left, Icon, Title, Body, Button, Header as NBHeader, Right as NBRight } from 'native-base';
import { Theme } from '../../Theme';
import { StatusBar } from 'react-native';

export const Header = ({navigation, Right}) => {
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
                <Icon name="menu" />
                </Button>
            </Left>
            <Body>
                <Title style={{ color: Theme.Primary }}>Dashboard</Title>
            </Body>
            <Right />
        </NBHeader>
    );
}
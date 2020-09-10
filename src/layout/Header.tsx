import React from 'react';

import { Theme } from '../../Theme';
import { StatusBar, View } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native'; 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { HeaderContainer, Left, Button, Title, HeaderContent } from './Styles';
import BGHeader from '../../assets/img/bg-header';
import { SvgCss } from 'react-native-svg';

const Header = ({Right, HeaderTitle, BackButton = false, NavigationParams = null}) => {
    const navigation = useNavigation();

    const RightButton = () => {
        return Right ? <Right /> : <View />;
    }

    const LeftButton = () => {
        if (BackButton) {
            return (
                <Left>
                    <Button onPress={() => navigation.goBack()}>
                        <FontAwesome5 style={{ fontSize: 22, marginLeft: 10, color: Theme.Dark }} name={"arrow-left"} />
                    </Button>
                </Left>
            )
        } else {
            return (
                <Left>
                    <Button onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                        <FontAwesome5 style={{ fontSize: 22, marginLeft: 10, color: Theme.Dark }} name={"bars"} />
                    </Button>
                </Left>
            )
        }
    }

    return (
        <HeaderContainer>
            <StatusBar barStyle="dark-content" />
            <HeaderContent>
                <LeftButton />
                <Title>{HeaderTitle}</Title>
                <RightButton />
            </HeaderContent>
            <SvgCss xml={BGHeader} width="100%" style={{position: 'absolute', top: -30, display: 'flex', flex: 1, zIndex: 1}}/>
        </HeaderContainer>
    );
}

export default Header;
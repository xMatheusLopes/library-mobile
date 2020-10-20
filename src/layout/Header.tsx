import React from 'react';

import { Theme } from '../../Theme';
import { StatusBar, View } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native'; 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { HeaderContainer, Left, Button, Title, HeaderContent } from './Styles';

const Header = (
    {Right, HeaderTitle, BackButton = false} : 
    {Right: any, HeaderTitle: string, BackButton: boolean}
) => {
    const navigation = useNavigation();

    const RightButton = () => {
        return Right ? <Right /> : <View style={{ width: 30 }} />;
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
            <StatusBar barStyle="dark-content" backgroundColor={Theme.Primary}/>
            <HeaderContent>
                <LeftButton />
                <Title>{HeaderTitle}</Title>
                <RightButton />
            </HeaderContent>
            {/* {DeviceInfo.hasNotch() && <Image source={require('../../assets/img/bg-header-notch.png')} style={{ position: 'absolute', width: '100%', zIndex: 2 }}/>}
            {!DeviceInfo.hasNotch() && <Image source={require('../../assets/img/bg-header.png')} style={{ position: 'absolute', width: '100%', zIndex: 2 }}/>} */}
        </HeaderContainer>
    );
}

export default Header;
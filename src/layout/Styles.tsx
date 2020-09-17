import styled from 'styled-components/native';
import { Theme } from '../../Theme';
import DeviceInfo from 'react-native-device-info';

export const HeaderContent = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: 16px;
    z-index: 3;
    elevation: 3;
    justify-content: space-between;
`; 

export const HeaderContainer = styled.SafeAreaView`
    width: 100%;
    display: flex;
    position: relative;
    height: ${DeviceInfo.hasNotch() ? '110px' : '60px'};
    background-color: ${Theme.Primary}
`;

export const Left = styled.View`

`;

export const Button = styled.TouchableOpacity`

`;

export const Title = styled.Text`
    font-weight: 600;
    font-size: 18px;
`;
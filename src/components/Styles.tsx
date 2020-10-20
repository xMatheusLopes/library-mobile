import styled from 'styled-components/native';

import { 
    Text as NBText,
    Item as NBItem,
 } from 'native-base';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const ViewItem = styled.View`
    margin-bottom: 14px;
    width: 100%;
`;

export const TextError = styled(NBText)`
    color: red;
    margin-left: 14px
`;

export const Item = styled(NBItem)`
    background-color: #f3f3f3;
    padding-horizontal: 10px;
    padding-vertical: 16px;
    border-radius: 8px;
    width: 100%;
    margin-left: 0px;
    height: 70px;
`;

export const TextInput = styled.TextInput`
    width: 100%;
    height: 100%;
`;

export const ViewAccessButton = styled.View`
    padding: 8px;
`;

export const ActivityIndicator = styled.ActivityIndicator`
    position: absolute;
    right: 5px
`;


export const Form = styled.View`
    width: 100%;
    padding: 0;
`;

export const FA5 = styled(FontAwesome5)`
    margin-right: 6px;
`;
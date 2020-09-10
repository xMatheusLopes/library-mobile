import styled from 'styled-components';

import { 
    Text as NBText,
    Item as NBItem,
 } from 'native-base';

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
    padding-vertical: 4px;
    border-radius: 8px;
    width: 100%;
    margin-left: 0px;
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
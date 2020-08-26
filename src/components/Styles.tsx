import styled from 'styled-components';

import { 
    Text as NBText,
    Item as NBItem,
 } from 'native-base';

export const ViewItem = styled.View`
    margin-bottom: 14px;
    margin-right: 14px;
`;

export const TextError = styled(NBText)`
    color: red;
    margin-left: 14px
`;

export const Item = styled(NBItem)`
    background-color: #bfbfbf;
    padding-horizontal: 10px;
    padding-vertical: 4px;
    border-radius: 8px;
`;

export const ViewAccessButton = styled.View`
    padding: 8px;
`;

export const ActivityIndicator = styled.ActivityIndicator`
    position: absolute;
    right: 5px
`;

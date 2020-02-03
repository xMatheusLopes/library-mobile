import styled from 'styled-components';

import { 
    Container as NBContainer,
    Card as NBCard,
    H2 as NBH2,
    Text as NBText,
    Item as NBItem,
 } from 'native-base';

export const Container = styled(NBContainer)`
    background-color: #f6ca1f;
    flex: 1;
    justify-content: center;
`;

export const ElevatedView = styled.View`
    elevation: 11;
    z-index: 1;
`;

export const BookMarker = styled.Image`
    width: 50px;
    height: 50px;
    left: 10px;
    resizeMode: contain;
`;

export const Card = styled(NBCard)`
    padding: 8px;
    border-radius: 8px;
    box-shadow: 10px 10px 10px rgba(244,166,1,1);
    top: -40px;
`;

export const H2 = styled(NBH2)`
    text-align: center;
    margin-top: 24px;
`;

export const TextCenter = styled(NBText)`
    text-align: center;
    margin-bottom: 24px;
    color: grey;
`;

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



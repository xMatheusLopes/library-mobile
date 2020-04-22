import styled from 'styled-components';

import { Theme } from '../../Theme';

import { Icon as NBIcon } from 'native-base';

export const Card = styled.View`
    flex: 0.5;
    background-color: ${Theme.Dark};
    padding: 8px;
    margin: 5px;
    border-radius: 8px;
`;

export const Name = styled.Text`
    font-size: 20px;
    color: ${Theme.Primary}
`;

export const Author = styled.Text`
    font-size: 12px;
    color: ${Theme.DarkContent}
`;

export const Container = styled.View`
    flex-direction: column;
`;

export const Image = styled.Image`
    resize-mode: contain;
    height: 284px;
    margin-bottom: 10px
`;

export const Price = styled.Text`
    color: green;
    font-size: 16px;
`;

export const BuyBtn = styled.TouchableOpacity`
    background-color: ${Theme.Primary};
    padding: 8px;
    align-items: center;
    border-radius: 6px;
    margin-top: 5px;
`;

export const BuyBtnText = styled.Text`
    color: ${Theme.Dark};
    font-weight: bold;
`;

export const BuyBtnView = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled(NBIcon)`
    margin-right: 5px; 
    font-size: 20px
`;
import styled from 'styled-components';

export const HeaderContent = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    top: 50px;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    elevation: 2;
    padding-left: 16px;
    padding-right: 16px;
`; 

export const HeaderContainer = styled.View`
    z-index: 2;
    elevation: 2;
`;

export const Left = styled.View`

`;

export const Button = styled.TouchableOpacity`

`;

export const Title = styled.Text`
    font-weight: 600;
    font-size: 18px;
`;
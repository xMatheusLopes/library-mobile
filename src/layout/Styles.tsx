import styled from 'styled-components';

export const HeaderContent = styled.SafeAreaView`
    display: flex;
    flex-direction: row;
    width: 90%;
    z-index: 3;
    elevation: 3;
    justify-content: space-between;
`; 

export const HeaderContainer = styled.View`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 3;
    elevation: 3;
`;

export const Left = styled.View`

`;

export const Button = styled.TouchableOpacity`

`;

export const Title = styled.Text`
    font-weight: 600;
    font-size: 18px;
`;
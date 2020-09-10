import styled from 'styled-components';
import { Platform, ViewStyle } from 'react-native'
import { Theme } from '../../../Theme';

export const PrimaryText = styled.Text`
  color: ${Platform.OS === 'android' ? '#3F51B5' : '#007aff'}
`;

export const content: ViewStyle = {
  padding: 16,
  minHeight: '100%',
  justifyContent: 'center'
};

export const scrollview: ViewStyle = {
  flex: 1,
  justifyContent: 'center'
}

export const MyContent = styled.SafeAreaView`
    flex: 1;
    background-color: ${ Theme.Dark };
    margin-top: 60px;
`;

export const MyContainer = styled.View`
    flex: 1;
    background-color: ${ Theme.Dark }
`;



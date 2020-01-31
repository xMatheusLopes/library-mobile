import styled from 'styled-components';
import { Platform, StyleSheet, ViewStyle } from 'react-native'

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



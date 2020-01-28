import styled from 'styled-components';
import { Platform } from 'react-native'

export const PrimaryText = styled.Text`
  color: ${Platform.OS === 'android' ? '#3F51B5' : '#007aff'}
`;


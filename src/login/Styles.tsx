import styled from 'styled-components';
import { Platform } from 'react-native'

export const Background = styled.View`
  background: #f6ca1f;
`;

// export const Card = styled.View`
//   background: white;
//   padding: 16px;
//   border-radius: 8px;
//   box-shadow: 0px 0px 15px rgba(0,0,0,0.40);
// `;

export const PrimaryText = styled.Text`
  color: ${Platform.OS === 'android' ? '#3F51B5' : '#007aff'}
`;


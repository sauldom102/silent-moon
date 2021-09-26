import { View } from 'react-native';
import styled from 'styled-components/native';
import BaseDatePicker from 'react-native-date-picker';

export const Container = styled(View)`
  background-color: #f5f5f9;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const DatePicker = styled(BaseDatePicker).attrs({
  textColor: '#263238',
})``;

import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'components';
import { SelectedProps } from './types';

export const Container = styled.View`
  align-items: center;
`;

export const Button = styled(TouchableOpacity)`
  padding: 20px 20px 16px;
`;

export const Title = styled(Text).attrs<SelectedProps>({
  family: 'HelveticaNeue-Medium',
})<SelectedProps>`
  font-size: 16px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.subtitle};
`;

export const Line = styled.View<SelectedProps>`
  width: 46px;
  height: 4px;
  border-radius: 2px;
  transform: translateY(2px);
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.transparent};
`;

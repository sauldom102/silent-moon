import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Text from 'components/Text';
import { LabelProps } from './types';

export const Container = styled.View`
  align-items: center;
`;

export const Content = styled(BorderlessButton).attrs(() => ({
  activeOpacity: 1,
}))`
  align-items: center;
  justify-content: center;
`;

export const Label = styled(Text).attrs(() => ({
  family: 'HelveticaNeue-Medium',
}))<LabelProps>`
  font-size: 14px;
  margin-top: 5px;
  text-align: center;
  color: ${({ focused, theme }) =>
    focused ? theme.colors.primary : '#A0A3B1'};
`;

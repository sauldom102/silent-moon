import { View } from 'react-native';
import styled from 'styled-components/native';
import { Text } from 'components';
import { TitleProps } from './types';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.View``;

export const Title = styled(Text).attrs<TitleProps>({
  family: 'HelveticaNeue-Medium',
})<TitleProps>`
  font-size: 14px;
  color: ${({ light }) => (light ? '#a1a4b2' : '#E6E7F2')};
  margin-left: 9px;
`;

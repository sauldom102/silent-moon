import { View } from 'react-native';
import styled from 'styled-components/native';
import Text from 'components/Text';
import { LightProps } from './types';

export const Container = styled(View)`
  align-items: center;
`;

export const Title = styled(Text).attrs({
  family: 'HelveticaNeue-Bold',
})`
  font-size: 30px;
  line-height: 41px;
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
`;

export const Subtitle = styled(Text).attrs<LightProps>({
  family: 'HelveticaNeue-Light',
})<LightProps>`
  font-size: 16px;
  line-height: 27px;
  color: ${({ light }) => (light ? '#ebeaec' : '#A0A3B1')};
  text-align: center;
  margin-top: 15px;
`;

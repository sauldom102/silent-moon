import { View } from 'react-native';
import styled from 'styled-components/native';
import Text from 'components/Text';
import { LightProps } from './types';

export const Container = styled(View)`
  align-items: center;
`;

export const Title = styled(Text).attrs<LightProps>({
  family: 'HelveticaNeue-Bold',
})<LightProps>`
  font-size: 30px;
  line-height: 41px;
  color: ${({ light }) => (light ? '#e6e7f2' : '#3F414E')};
  text-align: center;
`;

export const Subtitle = styled(Text).attrs<LightProps>({
  family: 'HelveticaNeue-Light',
})<LightProps>`
  font-size: 16px;
  line-height: 27px;
  color: ${({ light }) => (light ? '#ebeaec' : '#A1A4B2')};
  color: #ebeaec;
  text-align: center;
  margin-top: 15px;
`;

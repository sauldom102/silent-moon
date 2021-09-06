import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Text from 'components/Text';
import { ImageProps } from './types';

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.5,
})``;

export const Main = styled.View``;

export const Image = styled(FastImage)<ImageProps>`
  width: 162px;
  height: 113px;
  background-color: ${({ color }) => color};
  border-radius: 10px;
`;

export const Title = styled(Text).attrs({
  family: 'HelveticaNeue-Bold',
})`
  font-size: 18px;
  color: #3f414e;
  margin-top: 10.5px;
`;

export const Subtitle = styled(Text).attrs({
  family: 'HelveticaNeue-Medium',
})`
  font-size: 11px;
  letter-spacing: 0.55px;
  color: #a1a4b2;
  text-transform: uppercase;
  margin-top: 6px;
`;

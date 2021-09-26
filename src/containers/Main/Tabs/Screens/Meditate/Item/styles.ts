import styled from 'styled-components/native';
import { BlurView } from '@react-native-community/blur';
import FastImage from 'react-native-fast-image';
import { Text } from 'components';

export const Container = styled.View`
  z-index: -1;
`;

export const Bottom = styled(BlurView).attrs({
  blurType: 'light',
})`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 12px;
`;

export const Title = styled(Text).attrs({
  family: 'HelveticaNeue-Bold',
})`
  font-size: 16px;
  color: #fef9f3;
`;

export const Image = styled(FastImage).attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100%;
`;

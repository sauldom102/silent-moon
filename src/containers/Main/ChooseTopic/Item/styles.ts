import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { Text } from 'components';
import { ImageProps, TitleProps } from './types';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Title = styled(Text).attrs<TitleProps>({
  family: 'HelveticaNeue-Bold',
})<TitleProps>`
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 16px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ color }) => color};
`;

export const Image = styled(FastImage).attrs<ImageProps>({
  resizeMode: 'contain',
})<ImageProps>`
  height: ${({ height }) => height}px;
  margin: ${({ topSpacing }) => topSpacing}px
    ${({ horizontalSpacing }) => horizontalSpacing}px 0;
`;

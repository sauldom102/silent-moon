import { View } from 'react-native';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { ContainerProps, ImageProps } from './types';

export const Container = styled(View)<ContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 30%;
  background-color: ${({ color }) => color};
`;

export const Image = styled(FastImage).attrs<ImageProps>({
  resizeMode: 'contain',
})<ImageProps>`
  margin-top: ${({ safeTop }) => safeTop}px;
  width: 100%;
  height: ${({ theme }) => theme.sizes.headerImageHeight}px;
  background-color: ${({ color }) => color};
`;

import { View } from 'react-native';
import styled from 'styled-components/native';
import BaseCircle from './Circle';
import { ContainerProps } from './types';

export const Container = styled(View)<ContainerProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  justify-content: center;
  align-items: center;
  align-items: center;
`;

export const Circle = styled(BaseCircle)`
  position: absolute;
`;

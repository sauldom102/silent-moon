import { View } from 'react-native';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { RoundProps } from './types';

// eslint-disable-next-line import/prefer-default-export
export const Round = Animated.createAnimatedComponent(styled(View)<RoundProps>`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  background-color: #a3abff;
`);

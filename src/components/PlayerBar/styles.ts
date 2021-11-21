import { View } from 'react-native';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { SELECTOR_SIZE } from './constants';

export const Container = styled(View)`
  height: ${SELECTOR_SIZE}px;
  justify-content: center;
  margin: 0 ${SELECTOR_SIZE / 2}px;
`;

export const SelectorWrapper = Animated.createAnimatedComponent(styled.View`
  width: ${SELECTOR_SIZE + 64}px;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  margin: -32px;
`);

export const Selector = Animated.createAnimatedComponent(styled.View`
  width: ${SELECTOR_SIZE}px;
  aspect-ratio: 1;
  border-radius: ${SELECTOR_SIZE / 2}px;
  background-color: ${({ theme }) => theme.colors.title};
`);

export const LineBackground = styled.View`
  width: 100%;
  height: 3px;
  background-color: #a0a3b1;
  opacity: 0.5;
  border-radius: 12px;
  position: absolute;
`;

export const Line = Animated.createAnimatedComponent(styled.View`
  height: 4px;
  background-color: ${({ theme }) => theme.colors.title};
  border-radius: 12px;
  position: absolute;
`);

import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { addAlpha } from 'utils';
import { ColorProps } from './types';

export const Container = styled(BorderlessButton)`
  border-radius: 55px;
`;

export const Out = styled.View<ColorProps>`
  width: 91px;
  aspect-ratio: 1;
  border-radius: 55px;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => addAlpha(color, 0.1)};
`;

export const Main = styled.View<ColorProps>`
  width: 75px;
  aspect-ratio: 1;
  border-radius: 44px;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
`;

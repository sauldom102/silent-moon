import styled, { css } from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { ContainerProps } from './types';

export const Container = styled(BorderlessButton)<ContainerProps>`
  width: 55px;
  height: 55px;
  border-radius: 28px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  ${({ borderColor }) =>
    borderColor &&
    css`
      border-width: 1px;
      border-color: ${borderColor};
    `};
  justify-content: center;
  align-items: center;
`;

export const Main = styled.View``;

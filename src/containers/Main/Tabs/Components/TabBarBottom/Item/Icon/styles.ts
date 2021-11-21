import styled from 'styled-components/native';
import { ContainerProps } from './types';

export const Container = styled.View<ContainerProps>`
  width: 46px;
  height: 46px;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
  background-color: ${({ focused, theme }) =>
    focused ? theme.colors.primary : theme.colors.transparent};
`;

export const Badge = styled.View`
  position: absolute;
  top: 5px;
  right: 3px;
  width: 8px;
  aspect-ratio: 1;
  border-radius: 5px;
  background-color: #ff7c6b;
`;

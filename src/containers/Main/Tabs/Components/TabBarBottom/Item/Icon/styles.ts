import styled from 'styled-components/native';
import { ContainerProps } from './types';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.View<ContainerProps>`
  width: 46px;
  height: 46px;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
  background-color: ${({ focused, theme }) =>
    focused ? theme.colors.primary : theme.colors.transparent};
`;

import styled from 'styled-components/native';
import { ContainerProps } from './types';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px ${({ safeBottom }) => safeBottom + 10}px;
  border-top-width: 0;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 2px -5px 17px rgba(84, 87, 92, 0.1);
  elevation: 1;
`;

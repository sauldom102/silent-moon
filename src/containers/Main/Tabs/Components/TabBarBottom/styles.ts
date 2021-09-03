import styled from 'styled-components/native';
import { MainProps } from './types';

// eslint-disable-next-line import/prefer-default-export
export const Main = styled.View<MainProps>`
  flex-direction: row;
  padding-top: 12px;
  padding-bottom: ${({ safeBottom }) => safeBottom + 10}px;
  border-top-width: 0;
  z-index: 555;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.blue};
`;

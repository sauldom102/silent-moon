import styled from 'styled-components/native';
import { WelcomeFooter, WelcomeIllustration } from 'components';
import { MainProps } from './types';

export const Container = styled.View``;

export const Main = styled.View<MainProps>`
  padding-top: ${({ safeTop }) => 20 + safeTop}px;
  background-color: #faf8f5;
  align-items: center;
`;

export const Illustration = styled(WelcomeIllustration).attrs(({ theme }) => ({
  size: Math.min(theme.device.width - 40, 333),
}))`
  margin-top: 10px;
`;

export const Footer = styled(WelcomeFooter).attrs(({ theme }) => ({
  size: theme.device.width,
}))``;

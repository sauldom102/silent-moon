import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { Button as BaseButton, WelcomeSleepBackground } from 'components';
import { BottomProps } from './types';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Main = styled.View`
  flex: 1;
  align-items: center;
  padding: 80px 20px 0;
`;

export const Titles = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 28px;
`;

export const Illustration = styled(FastImage)`
  width: ${({ theme }) => theme.device.width * (369 / 414)}px;
  aspect-ratio: ${369 / 229};
  margin-top: 68px;
  margin-right: -48px;
  align-self: flex-end;
`;

export const Bottom = styled.View<BottomProps>`
  width: 100%;
  padding-bottom: ${({ safeBottom }) => 80 + safeBottom}px;
`;

export const Button = styled(BaseButton)``;

export const Background = styled(WelcomeSleepBackground).attrs(({ theme }) => ({
  size: theme.device.width,
}))`
  position: absolute;
`;

import styled from 'styled-components/native';
import {
  Button as BaseButton,
  MeditatingWomanIcon,
  Pulse as BasePulse,
} from 'components';
import { BottomProps } from './types';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Main = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 20px;
`;

export const Pulse = styled(BasePulse).attrs(({ theme }) => ({
  circles: 4,
  smallCircleSize: (284 / 414) * theme.device.width,
  increaseCircleSize: (70 / 414) * theme.device.width,
}))`
  position: absolute;
  top: -50px;
`;

export const MeditatingWoman = styled(MeditatingWomanIcon).attrs(
  ({ theme }) => ({
    size: theme.device.width,
  }),
)``;

export const Bottom = styled.View<BottomProps>`
  flex: 1;
  justify-content: center;
  width: 100%;
  padding: 0 20px ${({ safeBottom }) => 20 + safeBottom}px;
  background-color: #8c96ff;
`;

export const Button = styled(BaseButton).attrs({
  variant: 'secondary',
})``;

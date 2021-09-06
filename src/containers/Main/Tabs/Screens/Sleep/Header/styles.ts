import styled from 'styled-components/native';
import { SleepHeader, TitleSubtitle as BaseTitleSubtitle } from 'components';
import { SafeProps } from './types';

export const Container = styled.View``;

export const Safe = styled.View<SafeProps>`
  height: ${({ safeTop }) => safeTop + 66}px;
  background-color: #1f265e;
`;

export const TitleSubtitle = styled(BaseTitleSubtitle).attrs({
  light: true,
  titleStyle: {
    fontSize: 28,
  },
})`
  padding: 0 48px;
`;

export const Background = styled(SleepHeader).attrs(({ theme }) => ({
  size: theme.device.width,
}))`
  position: absolute;
  top: 20px;
`;

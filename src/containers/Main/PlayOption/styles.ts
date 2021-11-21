import styled, { css } from 'styled-components/native';
import { Button as BaseButton, Header as BaseHeader } from 'components';
import { ColorProps, ScrollProps } from './types';

const topBorders = css`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled(BaseHeader).attrs(({ theme }) => ({
  leftIconBackgroundColor: theme.isNightMode
    ? 'rgba(3, 23, 76, 0.5)'
    : '#F2F2F2',
  leftIconColor: theme.isNightMode ? '#E6E7F2' : '#3F414E',
  rightIconsBackgroundColor: 'rgba(3, 23, 76, 0.5)',
  rightIconsColor: '#E6E7F2',
}))``;

export const Scroll = styled.ScrollView.attrs<ScrollProps>(
  ({ safeBottom }) => ({
    contentContainerStyle: {
      paddingBottom: safeBottom,
    },
  }),
)<ScrollProps>`
  ${topBorders}
`;

export const Body = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 30px 0 20px;
  margin-top: ${({ theme }) =>
    theme.sizes.headerImageHeight - (55 + 8 + 12 + 20)}px;
  ${topBorders}
`;

export const Separator = styled.View`
  height: 1px;
  background-color: #98a1bd;
  opacity: 0.15;
  margin: 30px 0;
`;

export const Button = styled(BaseButton)<ColorProps>`
  margin: 33px 20px 0;
  background-color: ${({ theme, color }) =>
    theme.isNightMode ? theme.colors.primary : color};
  border-color: ${({ theme, color }) =>
    theme.isNightMode ? theme.colors.primary : color};
  z-index: 3;
`;

export const ExtraBottom = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: ${({ theme }) => theme.device.height}px;
  height: ${({ theme }) => theme.device.height}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

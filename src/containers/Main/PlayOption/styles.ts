import styled, { css } from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { Text, Button as BaseButton, Header as BaseHeader } from 'components';
import { device } from 'theme';
import BaseLabeledIcon from './LabeledIcon';
import { ColorProps } from './types';

const IMAGE_HEIGHT = device.width * (290 / 414);

const topBorders = css`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Container = styled.View<ColorProps>`
  flex: 1;
  background-color: ${({ color }) => color};
`;

export const Image = styled(FastImage).attrs<ColorProps>({
  resizeMode: 'contain',
})<ColorProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${IMAGE_HEIGHT}px;
  background-color: ${({ color }) => color};
`;

export const Header = styled(BaseHeader).attrs(({ theme }) => ({
  leftIconBackgroundColor: theme.isNightMode
    ? 'rgba(3, 23, 76, 0.5)'
    : '#F2F2F2',
  leftIconColor: theme.isNightMode ? '#E6E7F2' : '#3F414E',
  rightIconsBackgroundColor: 'rgba(3, 23, 76, 0.5)',
  rightIconsColor: '#E6E7F2',
}))``;

export const Scroll = styled.ScrollView`
  ${topBorders}
`;

export const Body = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 30px 0 20px;
  margin-top: ${IMAGE_HEIGHT - (55 + 8 + 12 + 20)}px;
  ${topBorders}
`;

export const Main = styled.View`
  padding: 0 20px;
`;

export const Title = styled(Text).attrs({
  family: 'HelveticaNeue-Bold',
})`
  font-size: 34px;
  line-height: 42px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Topic = styled(Text).attrs({
  family: 'HelveticaNeue-Medium',
})`
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.7px;
  color: ${({ theme }) => theme.colors.subtitle};
  text-transform: uppercase;
  margin-top: 16px;
`;

export const Description = styled(Text).attrs({
  family: 'HelveticaNeue-Light',
})`
  font-size: 16px;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.subtitle};
  margin-top: 20px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

export const LabeledIcon = styled(BaseLabeledIcon)`
  margin-right: 40px;
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

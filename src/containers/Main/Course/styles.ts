import { FlatList } from 'react-native';
import styled, { css } from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { Header as BaseHeader } from 'components';
import { device } from 'theme';
import BaseNarratorPicker from './NarratorPicker';
import { ColorProps, ItemType } from './types';

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

export const Body = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 30px 0 20px;
  margin-top: ${IMAGE_HEIGHT - (55 + 8 + 12 + 20)}px;
  ${topBorders}
`;

export const ExtraBottom = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: ${({ theme }) => theme.device.height}px;
  height: ${({ theme }) => theme.device.height}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const NarratorPicker = styled(BaseNarratorPicker)`
  margin-top: 40px;
`;

export const List = styled(FlatList as new () => FlatList<ItemType>).attrs({
  contentContainerStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
})`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const SeparatorWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Separator = styled.View`
  height: 1px;
  background-color: #adb8d9;
  opacity: 0.15;
  margin: 0 20px;
`;

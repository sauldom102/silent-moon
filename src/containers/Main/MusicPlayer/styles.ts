import styled, { css } from 'styled-components/native';
import {
  BorderlessButton,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {
  Header as BaseHeader,
  PlayerBar,
  Text,
  StatusBar as BaseStatusBar,
} from 'components';
import BasePlayButton from './PlayButton';
import { BodyProps, ImageProps } from './types';

export const Container = styled.ScrollView.attrs({
  alwaysBounceVertical: false,
})`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StatusBar = styled(BaseStatusBar).attrs(({ theme }) => ({
  light: !!theme.isNightMode,
}))``;

export const Header = styled(BaseHeader).attrs(({ theme }) => ({
  leftIconBackgroundColor: theme.isNightMode ? '#1F265E' : '#F2F2F2',
  leftIconColor: theme.isNightMode ? '#E6E7F2' : '#3F414E',
  rightIconsBackgroundColor: theme.isNightMode
    ? '#1F265E'
    : 'rgba(3, 23, 76, 0.5)',
  rightIconsColor: '#E6E7F2',
}))``;

export const Body = styled.View<BodyProps>`
  min-height: ${({ theme, headerHeight }) =>
    theme.device.height - headerHeight}px;
  justify-content: space-between;
  padding-top: 32px;
  padding-bottom: 40px;
`;

export const Top = styled.View`
  align-items: center;
`;

const imageSizing = css`
  width: 250px;
  height: 250px;
  border-radius: 10px;
`;

export const Image = styled.Image<ImageProps>`
  ${imageSizing}
  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}
`;

export const DefaultRect = styled.View`
  ${imageSizing}
  justify-content: center;
  align-items: center;
  background-color: rgba(163, 171, 255, 0.5);
`;

export const Title = styled(Text).attrs({
  family: 'HelveticaNeue-Bold',
})`
  font-size: 34px;
  line-height: 42px;
  text-align: center;
  color: ${({ theme }) => theme.colors.title};
  margin-top: 20px;
`;

export const Subtitle = styled(Text).attrs({
  family: 'HelveticaNeue-Medium',
})`
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  text-align: center;
  color: #a0a3b1;
  margin-top: 12px;
`;

export const Bottom = styled.View`
  flex: 1;
  justify-content: center;
  margin-top: 40px;
`;

export const Controls = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PlayButton = styled(BasePlayButton).attrs(({ theme }) => ({
  color: theme.colors.title,
  iconColor: theme.colors.dynamicWhite,
}))`
  margin: 0 50px;
`;

export const SideButton = styled(TouchableOpacity)``;

export const Slider = styled(PlayerBar).attrs({
  length: 1,
})`
  margin: 52px 40px 0;
`;

export const BottomTime = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 12px 20px 0;
`;

export const Time = styled(Text).attrs({
  family: 'HelveticaNeue-Medium',
})`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
`;

export const CreditsButton = styled(BorderlessButton)`
  margin-top: auto;
`;

export const Credits = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.subtitle};
  text-align: center;
`;

import styled from 'styled-components/native';
import BaseSlider from '@react-native-community/slider';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Header as BaseHeader, Text } from 'components';
import BasePlayButton from './PlayButton';

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled(BaseHeader).attrs(({ theme }) => ({
  leftIconBackgroundColor: theme.colors.white,
  leftIconColor: '#3F414E',
  leftButtonWithBorder: true,
  rightIconsBackgroundColor: '#C4C5CA',
  rightIconsColor: theme.colors.white,
}))``;

export const Body = styled.View`
  flex: 1;
  padding-top: 32px;
  padding-bottom: 40px;
`;

export const Top = styled.View`
  align-items: center;
`;

export const Image = styled(FastImage)`
  width: 250px;
  aspect-ratio: 1;
  border-radius: 10px;
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

export const Controls = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 69px;
`;

export const PlayButton = styled(BasePlayButton)`
  margin: 0 50px;
`;

export const SideButton = styled(TouchableOpacity)``;

export const Slider = styled(BaseSlider).attrs({
  minimumTrackTintColor: '#3F414E',
  maximumTrackTintColor: '#A0A3B1',
  tapToSeek: true,
})`
  margin: 20px 40px 0;
`;

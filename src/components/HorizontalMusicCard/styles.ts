import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { HorizontalStains } from 'components/Icons';
import SmallPlayButton from 'components/SmallPlayButton';
import Text from 'components/Text';
import { LightProps } from './types';

export const Container = styled(RectButton).attrs({
  activeOpacity: 0.1,
})`
  border-radius: 10px;
  overflow: hidden;
`;

export const Main = styled.View<LightProps>`
  flex-direction: row;
  align-items: center;
  padding: 27px 30px;
  background-color: ${({ light }) => (light ? '#F1DDCF' : '#333242')};
  height: 95px;
  z-index: -1;
`;

export const Stains = styled(HorizontalStains).attrs<LightProps>(
  ({ light, theme }) => ({
    size: theme.device.width,
    ...(light
      ? {
          leftColor: '#ECD3C2',
          topColor: '#FAC978',
          bottomColor: '#FF7C6B',
        }
      : {
          leftColor: '#444359',
          topColor: 'rgba(155, 157, 180, 0.49)',
          bottomColor: '#6C71A1',
        }),
  }),
)<LightProps>`
  position: absolute;
`;

export const Left = styled.View`
  flex: 1;
`;

export const Title = styled(Text).attrs<LightProps>({
  family: 'HelveticaNeue-Bold',
})<LightProps>`
  font-size: 18px;
  color: ${({ theme, light }) => (light ? '#3F414E' : theme.colors.white)};
`;

export const Subtitle = styled(Text).attrs<LightProps>({
  family: 'HelveticaNeue-Medium',
})<LightProps>`
  font-size: 11px;
  letter-spacing: 0.55px;
  color: ${({ light }) => (light ? '#5A6175' : '#ebeaec')};
  text-transform: uppercase;
  margin-top: 10px;
`;

export const PlayButton = styled(SmallPlayButton).attrs({
  variant: 'light',
})``;

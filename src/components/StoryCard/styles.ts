import styled from 'styled-components/native';
import ScaleButton from 'components/ScaleButton';
import Text from 'components/Text';
import { ImageProps } from './types';

export const Container = styled(ScaleButton).attrs({
  activeOpacity: 0.5,
})``;

export const Main = styled.View``;

export const Image = styled.Image<ImageProps>`
  width: ${({ theme }) => (theme.device.width - 60) / 2}px;
  height: 113px;
  background-color: ${({ color }) => color};
  border-radius: 10px;
`;

export const Title = styled(Text).attrs({
  family: 'HelveticaNeue-Bold',
})`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.title};
  margin-top: 10.5px;
`;

export const Subtitle = styled(Text).attrs({
  family: 'HelveticaNeue-Medium',
})`
  font-size: 11px;
  letter-spacing: 0.55px;
  color: ${({ theme }) => theme.colors.subtitle};
  text-transform: uppercase;
  margin-top: 6px;
`;

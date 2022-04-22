import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { Text, Button as BaseButton, ScaleButton } from 'components';

export const Container = styled(ScaleButton)``;

export const Main = styled.View`
  justify-content: flex-end;
  align-items: center;
  height: ${({ theme }) => (233 / 373) * (theme.device.width - 40)}px;
  border-radius: 10px;
  overflow: hidden;
  z-index: -1;
`;

export const Image = styled(FastImage).attrs({
  resizeMode: 'cover',
})`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Title = styled(Text).attrs({
  family: 'Garamond Premier Pro Semibold',
})`
  font-size: 36px;
  line-height: 42px;
  color: #ffe7bf;
  text-align: center;
`;

export const Subtitle = styled(Text).attrs({
  family: 'HelveticaNeue-Light',
})`
  font-size: 16px;
  line-height: 22px;
  color: #f9f9ff;
  text-align: center;
  max-width: 64%;
  margin-top: 5px;
`;

export const Button = styled(BaseButton).attrs({
  variant: 'secondary',
  titleStyle: {
    fontSize: 12,
  },
  passTouches: true,
})`
  width: 70px;
  height: 35px;
  margin-top: 22px;
  margin-bottom: 20px;
`;

import { View } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Text from 'components/Text';
import { ContainerProps, TitleProps } from './types';

export const Container = styled(View)<ContainerProps>`
  height: 54px;
  border-radius: 38px;
  border-width: 1px;
  border-color: ${({ borderColor, color }) => borderColor ?? color};
  background-color: ${({ color }) => color};
  overflow: hidden;
  opacity: ${({ enabled }) => (enabled ? 1 : 0.75)};
`;

export const Main = styled(RectButton)`
  border-radius: 12px;
`;

export const Body = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Left = styled.View`
  position: absolute;
  left: 28px;
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text).attrs<TitleProps>({
  family: 'HelveticaNeue-Medium',
})<TitleProps>`
  flex: 1;
  font-size: 14px;
  letter-spacing: 0.7px;
  text-align: center;
  text-transform: uppercase;
  color: ${({ color }) => color};
`;

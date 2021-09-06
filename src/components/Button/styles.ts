import { View } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Text from 'components/Text';
import { ContainerProps, TitleProps } from './types';

export const Container = styled(View)<ContainerProps>`
  height: 48px;
  border-radius: 38px;
  background-color: ${({ color }) => color};
  overflow: hidden;
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

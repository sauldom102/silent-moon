import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import TextBase from 'components/Text';
import { ColorProps } from './types';

export const Container = styled(BorderlessButton).attrs<ColorProps>(
  ({ color }) => ({
    rippleColor: color,
    borderless: false,
  }),
)<ColorProps>`
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const Title = styled(TextBase).attrs<ColorProps>({
  family: 'HelveticaNeue-Medium',
})<ColorProps>`
  color: ${({ color }) => color};
  letter-spacing: 0.7px;
  text-transform: uppercase;
`;

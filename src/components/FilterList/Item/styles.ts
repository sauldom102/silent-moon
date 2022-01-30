import styled, { css } from 'styled-components/native';
import ScaleButton from 'components/ScaleButton';
import Text from 'components/Text';
import { IconProps, TitleProps } from './types';

export const Container = styled(ScaleButton)``;

export const Main = styled.View``;

export const Icon = styled.View<IconProps>`
  width: 65px;
  height: 65px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary : '#A0A3B1'};
`;

export const Title = styled(Text).attrs<TitleProps>({
  family: 'HelveticaNeue-Medium',
})<TitleProps>`
  font-size: 16px;
  line-height: 17px;
  color: ${({ active }) => (active ? '#3F414E' : '#98A1BD')};
  ${({ active, light }) =>
    active &&
    light &&
    css`
      color: #e6e7f2;
    `}
  text-align: center;
  margin-top: 10px;
`;

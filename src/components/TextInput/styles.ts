import { TextInput, ColorValue, View } from 'react-native';
import styled, { css } from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { ContainerProps, InputContainerProps, InputProps } from './types';

export const Container = Animated.createAnimatedComponent(
  styled(View)<ContainerProps>``,
);

const focusedContainerStyles = css`
  border-color: #f00;
`;

const errorContainerStyles = css`
  border-color: #f00;
`;

const passwordTypeStyles = css`
  padding-right: 35px;
`;

const leftIconTypeStyles = css`
  padding-left: 32px;
`;

export const InputContainer = styled.View<InputContainerProps>`
  background-color: #f2f3f7;
  border-radius: 15px;
  ${({ focused }) => focused && focusedContainerStyles};
  ${({ error }) => error && errorContainerStyles};
  ${({ type }) => type === 'password' && passwordTypeStyles};
  ${({ haveLeftIcon }) => haveLeftIcon && leftIconTypeStyles};
`;

export const inputMultilineStyle = css`
  min-height: 90px;
  max-height: 140px;
  line-height: 21px;
`;

export const Input = styled(TextInput).attrs<InputProps>(({ multiline }) => ({
  placeholderTextColor: '#A1A4B2' as ColorValue,
  selectionColor: '#3F414E' as ColorValue,
  textAlignVertical: multiline ? 'top' : 'center',
}))<InputProps>`
  min-height: 63px;
  padding: 22px 20px;
  color: #3f414e;
  font-size: 16px;
  letter-spacing: 0.6px;
  font-family: HelveticaNeue;
  ${({ multiline }) => multiline && inputMultilineStyle}
`;

export const ButtonsContainer = styled.View.attrs({
  pointerEvents: 'box-none',
})`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
`;

export const RightIcon = styled.View`
  position: absolute;
  right: 10px;
`;

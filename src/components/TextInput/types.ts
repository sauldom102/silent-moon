import { RefObject } from 'react';
import { TextInputProps, ViewStyle, TextInput } from 'react-native';

export type InputType =
  | 'email'
  | 'password'
  | 'url'
  | 'phone'
  | 'number'
  | 'username'
  | 'select';

export type Props = Omit<TextInputProps, 'ref' | 'style'> & {
  disabled?: boolean;
  innerRef?: RefObject<TextInput>;
  nextFieldRef?: RefObject<TextInput>;
  onBlur?: () => void;
  style?: ViewStyle;
  type?: InputType;
  error?: string;
  onPressBack?: () => void;
  onPress?: () => void;
};

export type ContainerProps = {
  haveLeftIcon?: boolean;
};

export type InputContainerProps = {
  disabled?: boolean;
  focused?: boolean;
  error?: boolean;
  type?: Props['type'];
  haveLeftIcon?: boolean;
  multiline?: boolean;
};

export type InputProps = {
  type?: Props['type'];
};

export type LogicParams = Pick<
  Props,
  | 'nextFieldRef'
  | 'onBlur'
  | 'onSubmitEditing'
  | 'placeholder'
  | 'value'
  | 'type'
  | 'onChangeText'
  | 'onPressBack'
  | 'disabled'
  | 'onPress'
>;

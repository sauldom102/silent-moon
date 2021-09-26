import { useCallback, useMemo, useState } from 'react';
import { TextInputProps } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { LogicParams } from './types';

const useLogic = ({
  type,
  nextFieldRef,
  onBlur,
  onSubmitEditing,
  placeholder,
  value,
  onChangeText,
  onPressBack,
  onPress,
  disabled,
}: LogicParams) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [focused, setFocused] = useState(false);

  const [val, setVal] = useState(value);

  const handleChangeText = useCallback(
    (text: string) => {
      onChangeText?.(text);
      setVal(text);
    },
    [onChangeText],
  );

  const handlePasswordVisibility = useCallback(
    () => setIsPasswordVisible((s) => !s),
    [setIsPasswordVisible],
  );

  const onFocus = useCallback(() => setFocused(true), []);

  const handleBlur = useCallback(() => {
    setFocused(false);
    if (onBlur) onBlur();
  }, [onBlur]);

  const handleSubmitEditing = useCallback(
    (event) => {
      if (nextFieldRef?.current) {
        nextFieldRef.current.focus();
      } else if (onSubmitEditing) {
        onSubmitEditing(event);
      }
    },
    [nextFieldRef, onSubmitEditing],
  );

  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(
    () => ({
      opacity: opacity.value,
    }),
    [],
  );

  const handlePressIn = useCallback(() => {
    if (onPress) {
      onPress();
      opacity.value = 0.5;
    }
  }, [onPress, opacity]);

  const handlePressOut = useCallback(() => {
    if (onPress) {
      opacity.value = withTiming(1, {
        duration: 250,
      });
    }
  }, [onPress, opacity]);

  const hasNextField = !!nextFieldRef;
  const inputExtraProps: Partial<TextInputProps> = useMemo(
    () => ({
      ...(type === 'email' && {
        autoCapitalize: 'none',
        keyboardType: 'email-address',
        autoCorrect: false,
      }),
      ...(type === 'password' && {
        secureTextEntry: !isPasswordVisible,
      }),
      ...(type === 'url' && {
        autoCapitalize: 'none',
        keyboardType: 'url',
      }),
      ...(type === 'number' && {
        keyboardType: 'number-pad',
        returnKeyType: 'done',
      }),
      ...(type === 'username' && {
        autoCapitalize: 'none',
      }),
      ...(type === 'select' && {
        editable: false,
        onPressIn: handlePressIn,
        onPressOut: handlePressOut,
      }),
      returnKeyType: hasNextField ? 'next' : 'done',
    }),
    [type, isPasswordVisible, handlePressIn, handlePressOut, hasNextField],
  );

  const characters = useMemo(() => (value ? value.length : '0'), [value]);

  const pointerEvents = disabled ? ('none' as const) : ('auto' as const);

  const haveLeftIcon = !!onPressBack;

  return {
    focused,
    handleBlur,
    handlePasswordVisibility,
    handleSubmitEditing,
    inputExtraProps,
    isPasswordVisible,
    onFocus,
    placeholderValue: placeholder,
    characters,
    value: value !== undefined ? value : val,
    handleChangeText,
    pointerEvents,
    haveLeftIcon,
    animatedStyle,
  };
};

export default useLogic;

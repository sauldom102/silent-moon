import React, { FC, memo } from 'react';
import useLogic from './logic';
import PasswordButton from './PasswordButton';
import {
  Container,
  InputContainer,
  Input,
  ButtonsContainer,
  RightIcon,
} from './styles';
import { Props } from './types';

const TextInput: FC<Props> = ({
  disabled,
  innerRef,
  onPressBack,
  onPress,
  nextFieldRef,
  onBlur,
  onSubmitEditing,
  placeholder,
  returnKeyType,
  style,
  type,
  maxLength,
  value: val,
  onChangeText,
  error,
  multiline,
}) => {
  const {
    focused,
    handleBlur,
    handlePasswordVisibility,
    handleSubmitEditing,
    inputExtraProps,
    isPasswordVisible,
    onFocus,
    placeholderValue,
    value,
    handleChangeText,
    pointerEvents,
    haveLeftIcon,
    animatedStyle,
  } = useLogic({
    type,
    onBlur,
    onSubmitEditing,
    nextFieldRef,
    placeholder,
    onChangeText,
    value: val,
    onPressBack,
    onPress,
    disabled,
  });

  return (
    <Container
      style={[style, animatedStyle]}
      pointerEvents={pointerEvents}
      haveLeftIcon={haveLeftIcon}
    >
      <InputContainer
        disabled={disabled}
        error={!!error}
        type={type}
        focused={focused}
        haveLeftIcon={haveLeftIcon}
      >
        <Input
          ref={innerRef}
          onBlur={handleBlur}
          onFocus={onFocus}
          value={value}
          onChangeText={handleChangeText}
          onSubmitEditing={handleSubmitEditing}
          placeholder={placeholderValue}
          returnKeyType={returnKeyType}
          editable={!disabled}
          maxLength={maxLength}
          type={type}
          multiline={multiline}
          {...inputExtraProps}
        />
        <ButtonsContainer>
          <RightIcon>
            {type === 'password' && (
              <PasswordButton
                visible={isPasswordVisible}
                onPress={handlePasswordVisibility}
              />
            )}
          </RightIcon>
        </ButtonsContainer>
      </InputContainer>
    </Container>
  );
};

export default memo(TextInput);

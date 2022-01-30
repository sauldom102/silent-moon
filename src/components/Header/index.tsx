import React, { FC, memo, useEffect } from 'react';
import { useLayout } from '@react-native-community/hooks';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import IconButton from 'components/IconButton';
import { Container, Side, SecondRightIconButton, Title } from './styles';
import { Props } from './types';

const Header: FC<Props> = ({
  leftIcon,
  onPressLeft,
  leftButtonWithBorder,
  leftIconBackgroundColor,
  leftIconColor,
  title,
  rightIcon,
  onPressRight,
  secondRightIcon,
  onPressSecondRight,
  rightIconsBackgroundColor,
  rightIconsColor,
  onHeight,
  style,
}) => {
  const { top: safeTop } = useSafeAreaInsets();

  const { onLayout, height } = useLayout();

  useEffect(() => {
    onHeight?.(height);
  }, [onHeight, height]);

  return (
    <Container onLayout={onLayout} safeTop={safeTop} style={style}>
      <Side>
        {leftIcon && leftIconColor && leftIconBackgroundColor && (
          <IconButton
            icon={leftIcon}
            onPress={onPressLeft}
            iconColor={leftIconColor}
            backgroundColor={leftIconBackgroundColor}
            borderColor={leftButtonWithBorder ? '#EBEAEC' : undefined}
          />
        )}
      </Side>
      {!!title && <Title>{title}</Title>}
      <Side>
        {secondRightIcon && rightIconsColor && rightIconsBackgroundColor && (
          <SecondRightIconButton
            icon={secondRightIcon}
            onPress={onPressSecondRight}
            iconColor={rightIconsColor}
            backgroundColor={rightIconsBackgroundColor}
          />
        )}
        {rightIcon && rightIconsColor && rightIconsBackgroundColor && (
          <IconButton
            icon={rightIcon}
            onPress={onPressRight}
            iconColor={rightIconsColor}
            backgroundColor={rightIconsBackgroundColor}
          />
        )}
      </Side>
    </Container>
  );
};

export default memo(Header);

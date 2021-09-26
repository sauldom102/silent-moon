import React, { FC, memo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import IconButton from 'components/IconButton';
import { Container, Right, SecondRightIconButton, Title } from './styles';
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
  style,
}) => {
  const { top: safeTop } = useSafeAreaInsets();

  return (
    <Container safeTop={safeTop} style={style}>
      <IconButton
        icon={leftIcon}
        onPress={onPressLeft}
        iconColor={leftIconColor}
        backgroundColor={leftIconBackgroundColor}
        borderColor={leftButtonWithBorder ? '#EBEAEC' : undefined}
      />
      {!!title && <Title>{title}</Title>}
      <Right>
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
      </Right>
    </Container>
  );
};

export default memo(Header);

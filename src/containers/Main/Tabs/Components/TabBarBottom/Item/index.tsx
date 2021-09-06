import React, { useCallback, FC, memo } from 'react';
import useThemeMode from 'theme/useThemeMode';
import Icon from './Icon';
import { Content, Container, Label } from './styles';
import { Props } from './types';

const Item: FC<Props> = ({ jumpTo, isFocused, routeName }) => {
  const { mode, updateMode } = useThemeMode();

  const isNightMode = mode === 'night';

  const onPress = useCallback(() => {
    if (routeName !== 'Sleep' && isNightMode) {
      updateMode('day');
    } else if (routeName === 'Sleep' && !isNightMode) {
      updateMode('night');
    }
    jumpTo(routeName);
  }, [jumpTo, routeName, isNightMode, updateMode]);

  return (
    <Container>
      <Content onPress={onPress}>
        <Icon icon={routeName} focused={isFocused} />
        <Label focused={isFocused}>{routeName}</Label>
      </Content>
    </Container>
  );
};

export default memo(Item);

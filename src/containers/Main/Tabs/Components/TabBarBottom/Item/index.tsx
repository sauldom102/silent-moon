import React, { useCallback, FC, memo } from 'react';
import Icon from './Icon';
import { Content, Container, Label } from './styles';
import { Props } from './types';

const TabBarBottomItem: FC<Props> = ({ jumpTo, isFocused, routeName }) => {
  const onPress = useCallback(() => {
    jumpTo(routeName);
  }, [jumpTo, routeName]);

  return (
    <Container>
      <Content onPress={onPress}>
        <Icon icon={routeName} focused={isFocused} />
        <Label focused={isFocused}>{routeName}</Label>
      </Content>
    </Container>
  );
};

export default memo(TabBarBottomItem);

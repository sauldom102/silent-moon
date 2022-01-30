import React, { useCallback, FC, memo } from 'react';
import { useCurrentPlaying } from 'utils';
import Icon from './Icon';
import { Container, Content, Label } from './styles';
import { Props } from './types';

const Item: FC<Props> = ({ jumpTo, isFocused, routeName }) => {
  const { currentPlaying } = useCurrentPlaying();

  const handlePress = useCallback(() => {
    if (routeName === 'Music') {
      if (currentPlaying) {
        jumpTo('MusicPlayer', currentPlaying);
      }
      return null;
    }

    jumpTo(routeName);
    return null;
  }, [jumpTo, routeName, currentPlaying]);

  return (
    <Container>
      <Content onPress={handlePress}>
        <Icon icon={routeName} focused={isFocused} badge={!!true} />
        <Label focused={isFocused}>{routeName}</Label>
      </Content>
    </Container>
  );
};

export default memo(Item);

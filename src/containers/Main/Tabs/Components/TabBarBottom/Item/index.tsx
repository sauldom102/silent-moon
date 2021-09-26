import React, { useCallback, FC, memo } from 'react';
import { STORY_ITEMS } from 'models/StoryItem';
import useThemeMode from 'theme/useThemeMode';
import Icon from './Icon';
import { Content, Container, Label } from './styles';
import { Props } from './types';

const Item: FC<Props> = ({ jumpTo, isFocused, routeName }) => {
  const { updateMode } = useThemeMode();

  const onPress = useCallback(() => {
    if (routeName === 'Music') {
      jumpTo('MusicPlayer', {
        id: STORY_ITEMS.filter((s) => s.topic === 'Sleep Music')[0].id,
        type: 'story',
      });
      return null;
    }

    updateMode(routeName === 'Sleep' ? 'night' : 'day');
    jumpTo(routeName);
    return null;
  }, [jumpTo, routeName, updateMode]);

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

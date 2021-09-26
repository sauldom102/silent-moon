import React, { FC, memo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { STORY_TYPES } from 'models';
import {
  Container,
  Safe,
  TitleSubtitle,
  Background,
  FilterList,
  FeaturedStory,
} from './styles';
import { Props } from './types';

const OCEAN_MOON = require('assets/images/sleep/the-ocean-moon.png');

const Header: FC<Props> = ({ onPressStoryType }) => {
  const { top: safeTop } = useSafeAreaInsets();

  return (
    <Container>
      <Safe safeTop={safeTop} />
      <Background />
      <TitleSubtitle
        title="Sleep Stories"
        subtitle="Soothing bedtime stories to help you fall into a deep and natural sleep"
      />
      <FilterList
        items={STORY_TYPES}
        activeItem="all"
        onPressItem={onPressStoryType}
      />
      <FeaturedStory
        title="The Ocean Moon"
        subtitle="Non-stop 8- hour mixes of our most popular sleep audio"
        image={OCEAN_MOON}
      />
    </Container>
  );
};

export default memo(Header);

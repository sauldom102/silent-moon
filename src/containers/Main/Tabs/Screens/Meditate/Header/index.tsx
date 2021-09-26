import React, { FC, memo } from 'react';
import { STORY_TYPES } from 'models';
import {
  Container,
  TitleSubtitle,
  FilterList,
  HorizontalMusicCard,
} from './styles';
import { Props } from './types';

const Header: FC<Props> = ({ onPressStoryType }) => (
  <Container>
    <TitleSubtitle
      title="Meditate"
      subtitle="We can learn how to recognize when our minds are doing their normal everyday acrobatics."
    />
    <FilterList
      items={STORY_TYPES}
      activeItem="all"
      onPressItem={onPressStoryType}
    />
    <HorizontalMusicCard
      id="music-card"
      title="Daily Calm"
      topic="APR 30"
      duration="Pause Practice"
    />
  </Container>
);

export default memo(Header);

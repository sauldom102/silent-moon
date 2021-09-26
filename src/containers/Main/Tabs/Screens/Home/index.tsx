import React, { FC } from 'react';
import { StatusBar } from 'components';
import useConnect from './connect';
import { ACTIVITY_CARDS, RECOMMENDED_MUSIC_CARDS } from './constants';
import {
  Container,
  Main,
  LogoIcon,
  Morning,
  Wish,
  TopCards,
  ActivityCard,
  HorizontalMusicCard,
  StoryList,
} from './styles';
import { Props } from './types';

const Home: FC<Props> = () => {
  const {
    safeTop,
    handlePressActivityCard,
    handleOpenStoryItem,
    handlePressDailyThought,
  } = useConnect();

  return (
    <Container safeTop={safeTop}>
      <StatusBar />
      <Main>
        <LogoIcon />
        <Morning>Good Morning, Saul</Morning>
        <Wish>We wish you have a good day</Wish>
        <TopCards>
          {ACTIVITY_CARDS.map((a) => (
            <ActivityCard key={a.id} {...a} onPress={handlePressActivityCard} />
          ))}
        </TopCards>
        <HorizontalMusicCard
          id="music-card"
          title="Daily Thought"
          topic="Meditation"
          duration="3-10 min"
          onPress={handlePressDailyThought}
        />
      </Main>
      <StoryList
        title="Recommended for you"
        type="horizontal"
        items={RECOMMENDED_MUSIC_CARDS}
        onPressItem={handleOpenStoryItem}
      />
    </Container>
  );
};

export default Home;

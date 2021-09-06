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
  RecommendedList,
} from './styles';
import { Props } from './types';

const Home: FC<Props> = () => {
  const { safeTop, handlePressActivityCard } = useConnect();

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
        />
      </Main>
      <RecommendedList
        title="Recommended for you"
        items={RECOMMENDED_MUSIC_CARDS}
      />
    </Container>
  );
};

export default Home;

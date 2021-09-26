import React, { FC } from 'react';
import { StatusBar } from 'components';
import useConnect from './connect';
import { Container, Header, List } from './styles';
import { Props } from './types';

const MusicTopic: FC<Props> = () => {
  const { title, items, handleGoBack, handleOpenStoryItem, isNightMode } =
    useConnect();

  return (
    <Container>
      <StatusBar light={isNightMode} />
      <Header title={`${title} Music`} onPressLeft={handleGoBack} />
      <List items={items} onPressItem={handleOpenStoryItem} />
    </Container>
  );
};

export default MusicTopic;

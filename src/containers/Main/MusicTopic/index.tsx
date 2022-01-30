import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme, { nightTheme } from 'theme';
import useConnect from './connect';
import { Container, StatusBar, Header, List } from './styles';
import { Props } from './types';

const MusicTopic: FC<Props> = () => {
  const { title, fromSleep, items, handleGoBack, handleOpenStoryItem } =
    useConnect();

  return (
    <ThemeProvider theme={fromSleep ? nightTheme : theme}>
      <Container>
        <StatusBar />
        <Header title={`${title} Music`} onPressLeft={handleGoBack} />
        <List items={items} onPressItem={handleOpenStoryItem} />
      </Container>
    </ThemeProvider>
  );
};

export default MusicTopic;

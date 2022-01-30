import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { ContentHeader, StatusBar, StoryList, HeaderImage } from 'components';
import theme, { nightTheme } from 'theme';
import useConnect from './connect';
import {
  Container,
  Header,
  Scroll,
  Body,
  Separator,
  Button,
  ExtraBottom,
} from './styles';
import { Props } from './types';

const PlayOption: FC<Props> = () => {
  const {
    item,
    isDark,
    relatedItems,
    safeBottom,
    handlePressClose,
    handleOpenStoryItem,
    handlePressPlayButton,
  } = useConnect();

  if (!item) {
    return null;
  }

  return (
    <ThemeProvider theme={isDark ? nightTheme : theme}>
      <Container>
        <StatusBar light />
        <HeaderImage source={item.image} color={item.backgroundColor} />
        <Header
          leftIcon="close"
          onPressLeft={handlePressClose}
          rightIcon="download"
          secondRightIcon="like"
        />
        <Scroll safeBottom={safeBottom}>
          <ExtraBottom />
          <Body>
            <ContentHeader
              title={item.title}
              subtitle={item.topic}
              description="Ease the mind into a restful night’s sleep with these deep, amblent tones."
              favoritesNum={24434}
              listeningNum={34234}
            />
            <Separator />
            <StoryList
              title="Related"
              type="horizontal"
              items={relatedItems}
              onPressItem={handleOpenStoryItem}
            />
            <Button
              title="Play"
              color={item.color}
              onPress={handlePressPlayButton}
            />
          </Body>
        </Scroll>
      </Container>
    </ThemeProvider>
  );
};

export default PlayOption;

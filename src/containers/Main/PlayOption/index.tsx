import React, { FC } from 'react';
import { ContentHeader, StatusBar, StoryList } from 'components';
import useConnect from './connect';
import {
  Container,
  Image,
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
    relatedItems,
    handlePressClose,
    handleOpenStoryItem,
    handlePressPlayButton,
  } = useConnect();

  if (!item) {
    return null;
  }

  return (
    <Container color={item.backgroundColor}>
      <StatusBar light />
      <Image source={item.image} color={item.backgroundColor} />
      <Header
        leftIcon="close"
        onPressLeft={handlePressClose}
        rightIcon="download"
        secondRightIcon="like"
      />
      <Scroll>
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
  );
};

export default PlayOption;

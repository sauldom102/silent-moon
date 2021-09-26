import React, { FC } from 'react';
import { StatusBar, StoryList } from 'components';
import useConnect from './connect';
import {
  Container,
  Image,
  Header,
  Scroll,
  Body,
  Main,
  Title,
  Topic,
  Description,
  Info,
  LabeledIcon,
  Separator,
  Button,
  ExtraBottom,
} from './styles';
import { Props } from './types';

const PlayOption: FC<Props> = () => {
  const {
    item,
    relatedItems,
    isNightMode,
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
          <Main>
            <Title>{item.title}</Title>
            <Topic>{item.topic}</Topic>
            <Description>
              Ease the mind into a restful night’s sleep with these deep,
              amblent tones.
            </Description>
            <Info>
              <LabeledIcon
                title="24434 Favorites"
                icon="like"
                light={!isNightMode}
              />
              <LabeledIcon
                title="34234 Listening"
                icon="listen"
                light={!isNightMode}
              />
            </Info>
            <Separator />
          </Main>
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

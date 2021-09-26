import React, { FC, memo } from 'react';
import { BackwardIcon, ForwardIcon, StatusBar } from 'components';
import useConnect from './connect';
import {
  Container,
  Header,
  Body,
  Top,
  Image,
  Title,
  Subtitle,
  Controls,
  PlayButton,
  SideButton,
  Slider,
} from './styles';
import { Props } from './types';

const MusicPlayer: FC<Props> = () => {
  const {
    handlePressClose,
    playing,
    title,
    subtitle,
    image,
    handleTogglePlay,
    isNightMode,
  } = useConnect();

  return (
    <Container stickyHeaderIndices={[0]}>
      <Header
        leftIcon="close"
        onPressLeft={handlePressClose}
        rightIcon="download"
        secondRightIcon="like"
      />
      <StatusBar light={isNightMode} />
      <Body>
        <Top>
          <Image source={image} />
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Top>
        <Controls>
          <SideButton>
            <BackwardIcon />
          </SideButton>
          <PlayButton playing={playing} onPress={handleTogglePlay} />
          <SideButton>
            <ForwardIcon />
          </SideButton>
        </Controls>
        <Slider />
      </Body>
    </Container>
  );
};

export default memo(MusicPlayer);

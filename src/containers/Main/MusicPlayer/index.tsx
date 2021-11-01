import React, { FC, memo } from 'react';
import {
  BackwardIcon,
  ForwardIcon,
  ReducedLogoIcon,
  StatusBar,
} from 'components';
import useConnect from './connect';
import useLogic from './logic';
import {
  Container,
  Header,
  Body,
  Top,
  Image,
  DefaultRect,
  Title,
  Subtitle,
  Controls,
  PlayButton,
  SideButton,
  Slider,
  Bottom,
  Time,
} from './styles';
import { Props } from './types';

const MusicPlayer: FC<Props> = () => {
  const { handlePressClose, title, subtitle, image, isNightMode } =
    useConnect();

  const {
    displayCurrentTime,
    displayDuration,
    playing,
    handleTogglePlay,
    handleSliderChange,
    handleSlidePan,
    progress,
    handlePressBackwards,
    handlePressForward,
  } = useLogic();

  return (
    <Container stickyHeaderIndices={[1]}>
      <StatusBar light={isNightMode} />
      <Header
        leftIcon="close"
        onPressLeft={handlePressClose}
        rightIcon="download"
        secondRightIcon="like"
      />
      <Body>
        <Top>
          {image ? (
            <Image source={image} />
          ) : (
            <DefaultRect>
              <ReducedLogoIcon size={100} />
            </DefaultRect>
          )}
          <Title>{title}</Title>
          {!!subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Top>
        <Controls>
          <SideButton onPress={handlePressBackwards}>
            <BackwardIcon />
          </SideButton>
          <PlayButton playing={playing} onPress={handleTogglePlay} />
          <SideButton onPress={handlePressForward}>
            <ForwardIcon />
          </SideButton>
        </Controls>
        <Slider
          value={progress}
          onChange={handleSliderChange}
          onPan={handleSlidePan}
        />
        <Bottom>
          <Time>{displayCurrentTime}</Time>
          <Time>{displayDuration}</Time>
        </Bottom>
      </Body>
    </Container>
  );
};

export default memo(MusicPlayer);

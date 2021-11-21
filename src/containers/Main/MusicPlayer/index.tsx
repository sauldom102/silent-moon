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
  Bottom,
  PlayButton,
  SideButton,
  Slider,
  BottomTime,
  Time,
  CreditsButton,
  Credits,
} from './styles';
import { Props } from './types';

const MusicPlayer: FC<Props> = () => {
  const {
    handlePressClose,
    title,
    subtitle,
    item,
    image,
    backgroundColor,
    isNightMode,
    headerHeight,
    setHeaderHeight,
    handlePressCredits,
  } = useConnect();

  const {
    displayCurrentTime,
    displayDuration,
    playing,
    togglePlay,
    handleSliderChange,
    handleSlidePan,
    progress,
    handlePressBackwards,
    handlePressForward,
  } = useLogic({ item, subtitle });

  return (
    <Container stickyHeaderIndices={[1]}>
      <StatusBar light={isNightMode} />
      <Header
        leftIcon="close"
        onPressLeft={handlePressClose}
        rightIcon="download"
        secondRightIcon="like"
        onHeight={setHeaderHeight}
      />
      <Body headerHeight={headerHeight}>
        <Top>
          {image ? (
            <Image source={image} color={backgroundColor} />
          ) : (
            <DefaultRect>
              <ReducedLogoIcon size={100} />
            </DefaultRect>
          )}
          <Title>{title}</Title>
          {!!subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Top>
        <Bottom>
          <Controls>
            <SideButton onPress={handlePressBackwards}>
              <BackwardIcon />
            </SideButton>
            <PlayButton playing={playing} onPress={togglePlay} />
            <SideButton onPress={handlePressForward}>
              <ForwardIcon />
            </SideButton>
          </Controls>
          <Slider
            value={progress}
            onChange={handleSliderChange}
            onPan={handleSlidePan}
          />
          <BottomTime>
            <Time>{displayCurrentTime}</Time>
            <Time>{displayDuration}</Time>
          </BottomTime>
        </Bottom>
        <CreditsButton onPress={handlePressCredits}>
          <Credits>
            Creative Commons Music by Jason Shaw on Audionautix.com
          </Credits>
        </CreditsButton>
      </Body>
    </Container>
  );
};

export default memo(MusicPlayer);

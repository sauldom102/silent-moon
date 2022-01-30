import React, { FC, memo } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { BackwardIcon, ForwardIcon, ReducedLogoIcon } from 'components';
import theme, { nightTheme } from 'theme';
import useConnect from './connect';
import useLogic from './logic';
import {
  Container,
  StatusBar,
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
    isDark,
    image,
    backgroundColor,
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
    <ThemeProvider theme={isDark ? nightTheme : theme}>
      <Container stickyHeaderIndices={[1]}>
        <StatusBar />
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
    </ThemeProvider>
  );
};

export default memo(MusicPlayer);

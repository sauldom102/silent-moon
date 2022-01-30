import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar, TitleSubtitle } from 'components';
import { nightTheme } from 'theme';
import useConnect from './connect';
import {
  Container,
  Main,
  Titles,
  Illustration,
  Bottom,
  Button,
  Background,
} from './styles';
import { Props } from './types';

const ILLUSTRATION = require('assets/images/sleep/sleep-welcome.png');

const SleepWelcome: FC<Props> = () => {
  const { handelPressGetStarted, safeBottom } = useConnect();

  return (
    <ThemeProvider theme={nightTheme}>
      <Container>
        <StatusBar light />
        <Background />
        <Main>
          <Titles>
            <TitleSubtitle
              title="Welcome to Sleep"
              subtitle="Explore the new king of sleep. It uses sound and vesualization to create perfect conditions for refreshing sleep."
              light
            />
            <Illustration source={ILLUSTRATION} />
          </Titles>
          <Bottom safeBottom={safeBottom}>
            <Button title="Get Started" onPress={handelPressGetStarted} />
          </Bottom>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default SleepWelcome;

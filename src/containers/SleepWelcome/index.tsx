import React, { FC } from 'react';
import { StatusBar, TitleSubtitle } from 'components';
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
  );
};

export default SleepWelcome;

import React, { FC } from 'react';
import { StatusBar } from 'components';
import useConnect from './connect';
import Header from './Header';
import {
  Container,
  Main,
  Pulse,
  MeditatingWoman,
  Bottom,
  Button,
} from './styles';
import { Props } from './types';

const Welcome: FC<Props> = () => {
  const { handelPressGetStarted, safeBottom } = useConnect();

  return (
    <Container>
      <StatusBar light />
      <Header />
      <Main>
        <Pulse />
        <MeditatingWoman />
        <Bottom safeBottom={safeBottom}>
          <Button title="Get Started" onPress={handelPressGetStarted} />
        </Bottom>
      </Main>
    </Container>
  );
};

export default Welcome;

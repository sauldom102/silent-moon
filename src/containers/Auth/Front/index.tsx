import React, { FC } from 'react';
import { StatusBar } from 'components';
import useConnect from './connect';
import Header from './Header';
import {
  Container,
  Body,
  Main,
  TitleSubtitle,
  Bottom,
  Button,
  Already,
} from './styles';
import { Props } from './types';

const Front: FC<Props> = () => {
  const { handlePressLogin, handlePressSignUp, safeBottom } = useConnect();

  return (
    <Container>
      <StatusBar />
      <Body safeBottom={safeBottom}>
        <Header />
        <Main>
          <TitleSubtitle
            title="We are what we do"
            subtitle="Thousand of people are usign silent moon for smalls meditation"
          />
          <Bottom>
            <Button title="Sign Up" onPress={handlePressSignUp} />
            <Already action="log in" onPress={handlePressLogin} />
          </Bottom>
        </Main>
      </Body>
    </Container>
  );
};

export default Front;

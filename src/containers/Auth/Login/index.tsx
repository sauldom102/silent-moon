import React, { FC } from 'react';
import { AuthFormHeader, StatusBar } from 'components';
import useConnect from './connect';
import {
  Container,
  Background,
  Header,
  Body,
  Main,
  Inputs,
  Input,
  Button,
} from './styles';
import { Props } from './types';

const Login: FC<Props> = () => {
  const { safeBottom, handleGoBack, inputRefs, control, submit, isValid } =
    useConnect();

  return (
    <Container>
      <StatusBar />
      <Background />
      <Body safeBottom={safeBottom} stickyHeaderIndices={[0]}>
        <Header leftIcon="back" onPressLeft={handleGoBack} />
        <Main>
          <AuthFormHeader
            title="Welcome Back!"
            subtitle="or log in with email"
          />
          <Inputs>
            <Input
              name="email"
              type="email"
              control={control}
              placeholder="Email"
              nextFieldRef={inputRefs.password}
            />
            <Input
              innerRef={inputRefs.password}
              name="password"
              type="password"
              control={control}
              placeholder="Password"
            />
          </Inputs>
          <Button title="Log In" enabled={isValid} onPress={submit} />
        </Main>
      </Body>
    </Container>
  );
};

export default Login;

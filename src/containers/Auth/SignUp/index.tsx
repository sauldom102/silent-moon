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

const SignUp: FC<Props> = () => {
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
            title="Create your account"
            subtitle="or sign up with email"
          />
          <Inputs>
            <Input
              name="name"
              control={control}
              placeholder="How do you prefer to be called?"
              nextFieldRef={inputRefs.email}
            />
            <Input
              innerRef={inputRefs.email}
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
          <Button title="Get Started" enabled={isValid} onPress={submit} />
        </Main>
      </Body>
    </Container>
  );
};

export default SignUp;

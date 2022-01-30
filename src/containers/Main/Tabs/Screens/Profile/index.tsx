import React, { FC } from 'react';
import { StatusBar } from 'components';
import useConnect from './connect';
import { Container, Main, LogoIcon, LogoutButton } from './styles';
import { Props } from './types';

const Profile: FC<Props> = () => {
  const { safeTop, handlePressLogout } = useConnect();

  return (
    <Container safeTop={safeTop}>
      <StatusBar />
      <Main>
        <LogoIcon />
        <LogoutButton title="Logout" onPress={handlePressLogout} />
      </Main>
    </Container>
  );
};

export default Profile;

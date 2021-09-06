import React, { FC, memo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LogoIcon } from 'components';
import { Container, Main, Illustration, Footer } from './styles';
import { Props } from './types';

const Header: FC<Props> = () => {
  const { top: safeTop } = useSafeAreaInsets();

  return (
    <Container>
      <Main safeTop={safeTop}>
        <LogoIcon />
        <Illustration />
      </Main>
      <Footer />
    </Container>
  );
};

export default memo(Header);

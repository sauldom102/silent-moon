import React, { FC, memo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container, Safe, TitleSubtitle, Background } from './styles';
import { Props } from './types';

const Header: FC<Props> = () => {
  const { top: safeTop } = useSafeAreaInsets();

  return (
    <Container>
      <Safe safeTop={safeTop} />
      <Background />
      <TitleSubtitle
        title="Sleep Stories"
        subtitle="Soothing bedtime stories to help you fall into a deep and natural sleep"
      />
    </Container>
  );
};

export default memo(Header);

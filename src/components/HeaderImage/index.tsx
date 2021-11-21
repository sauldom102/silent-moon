import React, { FC, memo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container, Image } from './styles';
import { Props } from './types';

const HeaderImage: FC<Props> = ({ source, color }) => {
  const { top: safeTop } = useSafeAreaInsets();

  return (
    <Container color={color}>
      <Image source={source} color={color} safeTop={safeTop} />
    </Container>
  );
};

export default memo(HeaderImage);

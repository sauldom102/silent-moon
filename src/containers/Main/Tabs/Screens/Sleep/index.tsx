import React, { FC, useCallback } from 'react';
import { StatusBar } from 'components';
import useConnect from './connect';
import Header from './Header';
import { Container, List } from './styles';
import { Props } from './types';

const Sleep: FC<Props> = () => {
  const {} = useConnect();

  const handleRenderHeader = useCallback(() => <Header />, []);

  return (
    <Container>
      <StatusBar light />
      <List data={[]} ListHeaderComponent={handleRenderHeader} />
    </Container>
  );
};

export default Sleep;

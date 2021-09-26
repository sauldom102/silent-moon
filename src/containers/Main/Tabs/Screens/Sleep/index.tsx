import React, { FC, useCallback } from 'react';
import { StatusBar } from 'components';
import useConnect from './connect';
import Header from './Header';
import { Container, List } from './styles';
import { Props } from './types';

const Sleep: FC<Props> = () => {
  const { items, handleOpenStoryItem, handlePressStoryType } = useConnect();

  const handleRenderHeader = useCallback(
    () => <Header onPressStoryType={handlePressStoryType} />,
    [handlePressStoryType],
  );

  return (
    <Container>
      <StatusBar light />
      <List
        items={items}
        ListHeaderComponent={handleRenderHeader}
        onPressItem={handleOpenStoryItem}
      />
    </Container>
  );
};

export default Sleep;

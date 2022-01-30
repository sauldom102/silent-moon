import React, { FC, useCallback } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'components';
import { nightTheme } from 'theme';
import useConnect from './connect';
import Header from './Header';
import { Container, List } from './styles';
import { Props } from './types';

const Sleep: FC<Props> = () => {
  const { items, handleOpenStoryItem, handlePressStoryType, handlePressInfo } =
    useConnect();

  const handleRenderHeader = useCallback(
    () => (
      <Header
        onPressStoryType={handlePressStoryType}
        onPressInfo={handlePressInfo}
      />
    ),
    [handlePressStoryType, handlePressInfo],
  );

  return (
    <ThemeProvider theme={nightTheme}>
      <Container>
        <StatusBar light />
        <List
          items={items}
          ListHeaderComponent={handleRenderHeader}
          onPressItem={handleOpenStoryItem}
        />
      </Container>
    </ThemeProvider>
  );
};

export default Sleep;

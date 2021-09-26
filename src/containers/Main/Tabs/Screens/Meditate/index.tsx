import React, { FC, useCallback } from 'react';
import { StatusBar } from 'components';
import { GRID_LAYOUT } from 'models';
import useConnect from './connect';
import Header from './Header';
import Item from './Item';
import { Container, FlatGrid } from './styles';
import { Props } from './types';

const Meditate: FC<Props> = () => {
  const {
    safeTop,
    safeBottom,
    data,
    handlePressMeditationItem,
    handlePressStoryType,
  } = useConnect();

  const handleRenderItemChildren = useCallback(({ childrenProps }) => {
    const { title, image = {} } = childrenProps ?? {};
    return <Item title={title} image={image} />;
  }, []);

  const handleRenderHeader = useCallback(
    () => <Header onPressStoryType={handlePressStoryType} />,
    [handlePressStoryType],
  );

  return (
    <Container>
      <StatusBar />
      <FlatGrid
        data={data}
        layouts={{ 'layout-1': GRID_LAYOUT }}
        ListHeaderComponent={handleRenderHeader}
        renderItemChildren={handleRenderItemChildren}
        onItemPress={handlePressMeditationItem}
        safeTop={safeTop}
        safeBottom={safeBottom}
      />
    </Container>
  );
};

export default Meditate;

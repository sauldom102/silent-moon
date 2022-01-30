import React, { FC, useCallback } from 'react';
import { StatusBar } from 'components';
import { GRID_LAYOUT } from 'models';
import useConnect from './connect';
import Header from './Header';
import Item from './Item';
import { Container, FlatGrid } from './styles';
import { Props } from './types';

const ChooseTopic: FC<Props> = () => {
  const { safeTop, safeBottom, data, handlePressItem } = useConnect();

  const handleRenderItemChildren = useCallback(({ childrenProps }) => {
    const {
      title,
      titleColor,
      image,
      imageSpecs: { height = 0, topSpacing = 0, horizontalSpacing = 0 } = {},
    } = childrenProps ?? {};
    return (
      <Item
        title={title}
        titleColor={titleColor}
        image={image}
        imageHeight={height}
        imageTopSpacing={topSpacing}
        imageHorizontalSpacing={horizontalSpacing}
      />
    );
  }, []);

  return (
    <Container>
      <StatusBar />
      <FlatGrid
        data={data}
        layouts={{ 'layout-1': GRID_LAYOUT }}
        ListHeaderComponent={Header}
        renderItemChildren={handleRenderItemChildren}
        onItemPress={handlePressItem}
        safeTop={safeTop}
        safeBottom={safeBottom}
      />
    </Container>
  );
};

export default ChooseTopic;

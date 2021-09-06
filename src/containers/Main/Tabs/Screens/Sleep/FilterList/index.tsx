import React, { FC, memo, useCallback } from 'react';

import { List } from './styles';
import { Item, Props, RenderItemProps } from './types';

const FilterList: FC<Props> = ({ items, activeItem, onPressItem }) => {
  const extractItemKey = useCallback((item: Item) => item.id, []);

  const handleRenderItem = useCallback(({ item }: RenderItemProps) => null, []);

  return (
    <List
      data={items}
      keyExtractor={extractItemKey}
      renderItem={handleRenderItem}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  );
};

export default memo(FilterList);

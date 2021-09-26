import React, { FC, memo, useCallback } from 'react';
import Item from './Item';
import { List, Separator } from './styles';
import { Item as ItemType, Props, RenderItemProps } from './types';

const FilterList: FC<Props> = ({
  items,
  activeItem,
  onPressItem,
  light = false,
  style,
}) => {
  const extractItemKey = useCallback((item: ItemType) => item.id, []);

  const handleRenderItem = useCallback(
    ({ item }: RenderItemProps) => (
      <Item
        id={item.id}
        title={item.title}
        icon={item.icon}
        active={item.id === activeItem}
        onPress={onPressItem}
        light={light}
      />
    ),
    [activeItem, onPressItem, light],
  );

  return (
    <List
      data={items}
      keyExtractor={extractItemKey}
      renderItem={handleRenderItem}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={Separator}
      ListHeaderComponent={Separator}
      ListFooterComponent={Separator}
      style={style}
      horizontal
    />
  );
};

export default memo(FilterList);

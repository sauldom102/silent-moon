import React, { FC, memo, useCallback } from 'react';
import MusicCard from 'components/MusicCard';
import { Container, Title, List, Separator } from './styles';
import { Item, Props, RenderItemProps } from './types';

const RecommendedList: FC<Props> = ({ title, items, style }) => {
  const extractItemKey = useCallback((it: Item) => it.id, []);

  const handleRenderItem = useCallback(
    ({ item }: RenderItemProps) => <MusicCard {...item} />,
    [],
  );

  return (
    <Container style={style}>
      <Title>{title}</Title>
      <List
        data={items}
        keyExtractor={extractItemKey}
        renderItem={handleRenderItem}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={Separator}
        ListFooterComponent={Separator}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </Container>
  );
};

export default memo(RecommendedList);

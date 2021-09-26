import React, { FC, memo, useCallback, useMemo } from 'react';
import { FlatListProps } from 'react-native';
import StoryCard from 'components/StoryCard';
import { Container, Title, List, HSeparator, VSeparator } from './styles';
import { Item, Props, RenderItemProps } from './types';

const StoryList: FC<Props> = ({
  title,
  items,
  onPressItem,
  type,
  style,
  ...props
}) => {
  const extractItemKey = useCallback((it: Item) => it.id, []);

  const handleRenderItem = useCallback(
    ({ item }: RenderItemProps) => (
      <StoryCard {...item} onPress={onPressItem} />
    ),
    [onPressItem],
  );

  const extraProps = useMemo<Partial<FlatListProps<Item>>>(() => {
    if (type === 'vertical') {
      return {
        numColumns: 2,
        columnWrapperStyle: { justifyContent: 'space-between' },
        contentContainerStyle: {
          paddingHorizontal: 20,
        },
        ItemSeparatorComponent: VSeparator,
        ListHeaderComponent: VSeparator,
        ListFooterComponent: VSeparator,
      };
    }

    return {
      horizontal: true,
      showsHorizontalScrollIndicator: false,
      ItemSeparatorComponent: HSeparator,
      ListHeaderComponent: HSeparator,
      ListFooterComponent: HSeparator,
    };
  }, [type]);

  return (
    <Container style={style}>
      {!!title && <Title>{title}</Title>}
      <List
        data={items}
        keyExtractor={extractItemKey}
        renderItem={handleRenderItem}
        {...extraProps}
        {...props}
      />
    </Container>
  );
};

export default memo(StoryList);

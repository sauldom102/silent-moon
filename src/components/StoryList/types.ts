import { FlatListProps, ListRenderItemInfo, ViewStyle } from 'react-native';
import { Props as StoryCardProps } from 'components/StoryCard/types';

export type Item = Omit<StoryCardProps, 'onPress'>;

export type Props = Omit<
  FlatListProps<Item>,
  | 'data'
  | 'contentContainerStyle'
  | 'indicatorStyle'
  | 'keyExtractor'
  | 'renderItem'
  | 'ItemSeparatorComponent'
  | 'style'
> & {
  title?: string;
  items: Item[];
  onPressItem?: (id: string, topic: string) => void;
  type: 'vertical' | 'horizontal';
  style?: ViewStyle;
};

export type RenderItemProps = ListRenderItemInfo<Item>;

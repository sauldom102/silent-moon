import { ListRenderItemInfo, ViewStyle } from 'react-native';
import { Props as MusicCardProps } from 'components/MusicCard/types';

export type Item = Omit<MusicCardProps, 'onPress'>;

export type Props = {
  title: string;
  items: Item[];
  style?: ViewStyle;
};

export type RenderItemProps = ListRenderItemInfo<Item>;

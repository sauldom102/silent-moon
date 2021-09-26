import { ListRenderItemInfo, ViewStyle } from 'react-native';
import { Props as ItemProps } from './Item/types';

export type Item = Omit<ItemProps, 'onPress' | 'active'>;

export type Props = {
  items: Item[];
  activeItem?: string;
  onPressItem?: (id: string) => void;
  light?: boolean;
  style?: ViewStyle;
};

export type RenderItemProps = ListRenderItemInfo<Item>;

export type LightProps = {
  light: boolean;
};

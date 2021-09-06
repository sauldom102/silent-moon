import { ListRenderItemInfo } from 'react-native';

export type Item = {
  id: string;
  title: string;
};

export type Props = {
  items: Item[];
  activeItem?: string;
  onPressItem?: (id: string) => void;
};

export type RenderItemProps = ListRenderItemInfo<Item>;

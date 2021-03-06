import { ListRenderItemInfo } from 'react-native';
import CourseMusic from 'models/CourseMusic';
import { MainStackScreenProps } from 'navigator/types';

export type Props = MainStackScreenProps<'Course'> & {};

export type ItemType = CourseMusic;

export type RenderItemProps = ListRenderItemInfo<ItemType>;

export type ListProps = {
  safeBottom: number;
};

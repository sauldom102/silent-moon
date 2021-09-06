import { Source } from 'react-native-fast-image';

export type Props = {
  title: string;
  titleColor: string;
  image: Source;
  imageHeight: number;
  imageTopSpacing?: number;
  imageHorizontalSpacing?: number;
};

export type ImageProps = {
  height: number;
  topSpacing: number;
  horizontalSpacing: number;
};

export type TitleProps = {
  color: string;
};

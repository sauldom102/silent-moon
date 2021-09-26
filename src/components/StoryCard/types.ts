import { Source } from 'react-native-fast-image';

export type Props = {
  id: string;
  image: Source;
  title: string;
  topic: string;
  color: string;
  duration: string;
  onPress?: (id: string, topic: string) => void;
};

export type ImageProps = {
  color: string;
};

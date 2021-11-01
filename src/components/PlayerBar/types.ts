import { ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';

export type Props = {
  value: Animated.SharedValue<number>;
  onChange: (value: number) => void;
  onPan?: (active: boolean) => void;
  style?: ViewStyle;
};

export type LogicProps = {
  value: Animated.SharedValue<number>;
  onChange: (value: number) => void;
  onPan?: (active: boolean) => void;
};

export type AnimationContext = {
  startX: number;
};

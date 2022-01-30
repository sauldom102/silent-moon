import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

// eslint-disable-next-line import/prefer-default-export
export const Container = Animated.createAnimatedComponent(
  styled(TouchableOpacity).attrs({
    activeOpacity: 0.85 as number,
  })``,
);

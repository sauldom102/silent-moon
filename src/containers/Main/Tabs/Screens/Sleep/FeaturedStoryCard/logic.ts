import { useCallback } from 'react';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const useLogic = () => {
  const active = useSharedValue(false);

  const handleActiveChange = useCallback(
    (a: boolean) => {
      active.value = a;
    },
    [active],
  );

  const scale = useDerivedValue(
    () =>
      withSpring(
        interpolate(active.value ? 1 : 0, [0, 1], [1, 0.97], Extrapolate.CLAMP),
      ),
    [active],
  );

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          scale: scale.value,
        },
      ],
    }),
    [scale],
  );

  return {
    handleActiveChange,
    animatedStyle,
  };
};

export default useLogic;

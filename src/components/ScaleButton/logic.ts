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

  const handlePressIn = useCallback(() => {
    active.value = true;
  }, [active]);

  const handlePressOut = useCallback(() => {
    active.value = false;
  }, [active]);

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
    handlePressIn,
    handlePressOut,
    animatedStyle,
  };
};

export default useLogic;

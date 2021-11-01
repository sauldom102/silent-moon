import { useMemo } from 'react';
import { useLayout } from '@react-native-community/hooks';
import {
  useSharedValue,
  useAnimatedReaction,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  runOnJS,
} from 'react-native-reanimated';
import { SELECTOR_SIZE } from './constants';
import { LogicProps, AnimationContext } from './types';

const useLogic = ({ value, onChange, onPan }: LogicProps) => {
  const { width, onLayout } = useLayout();

  const startPosition = useMemo(() => 0 - SELECTOR_SIZE / 2, []);

  const endPosition = useMemo(() => width - SELECTOR_SIZE / 2, [width]);

  const x = useSharedValue(value.value * endPosition);

  useAnimatedReaction(
    () => value.value * endPosition,
    (val) => {
      x.value = val;
    },
    [value, endPosition],
  );

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx: AnimationContext) => {
      ctx.startX = x.value;
      if (onPan) {
        runOnJS(onPan)(true);
      }
    },
    onActive: ({ translationX }, ctx: AnimationContext) => {
      const position = Math.min(
        Math.max(ctx.startX + translationX, startPosition),
        endPosition,
      );
      x.value = position;
    },
    onEnd: ({ translationX }, ctx: AnimationContext) => {
      const position = Math.min(
        Math.max(ctx.startX + translationX, startPosition),
        endPosition,
      );
      x.value = position;
      if (onPan) {
        runOnJS(onPan)(false);
      }
      if (onChange) {
        const newValue = Math.max(position / endPosition, 0);
        runOnJS(onChange)(newValue);
      }
    },
  });

  const selectorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value }],
  }));

  const lineStyle = useAnimatedStyle(() => ({
    width: x.value + SELECTOR_SIZE / 2,
  }));

  return {
    selectorStyle,
    lineStyle,
    onGestureEvent,
    onLayout,
  };
};

export default useLogic;

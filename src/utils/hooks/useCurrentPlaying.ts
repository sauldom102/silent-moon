import { useCallback } from 'react';
import { createState, useHookstate } from '@hookstate/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

type CurrentPlaying = {
  id: string;
  type: 'meditation' | 'story' | 'courseMusic';
};

const CURRENT_PLAYING = 'current-playing';

const globalCurrentPlaying = createState<CurrentPlaying | null>(async () => {
  const cachedCurrentPlaying = await AsyncStorage.getItem(CURRENT_PLAYING);
  const current = cachedCurrentPlaying
    ? JSON.parse(cachedCurrentPlaying)
    : undefined;
  return current;
});

const { merge } = globalCurrentPlaying;

const useCurrentPlaying = () => {
  const { value } = useHookstate(globalCurrentPlaying);

  const setCurrentPlaying = useCallback((current: CurrentPlaying) => {
    AsyncStorage.setItem(CURRENT_PLAYING, JSON.stringify(current));
    merge(current);
  }, []);

  return {
    currentPlaying: value,
    setCurrentPlaying,
  };
};

export default useCurrentPlaying;

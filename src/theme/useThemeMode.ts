import { useEffect, useCallback, useState, useMemo } from 'react';
import { createState, useState as useGlobalState } from '@hookstate/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import defaultTheme, { nightTheme } from 'theme';

type Mode = 'day' | 'night';

export const globalMode = createState<Mode>('day');

const STORAGE_KEY = 'theme-mode';

const useThemeMode = () => {
  const { set, value: mode } = useGlobalState(globalMode);

  const [loaded, setLoaded] = useState(false);

  const updateMode = useCallback(
    (newMode: Mode, update = true) => {
      AsyncStorage.setItem(STORAGE_KEY, newMode);
      if (update) {
        set(newMode);
      }
    },
    [set],
  );

  const toggleMode = useCallback(() => {
    set(mode === 'day' ? 'night' : 'day');
  }, [set, mode]);

  const handleInit = useCallback(async () => {
    const cachedMode = (await AsyncStorage.getItem(STORAGE_KEY)) as Mode;
    if (cachedMode && mode !== cachedMode) {
      set(cachedMode);
    }
    setLoaded(true);
  }, [set, mode]);

  useEffect(() => {
    handleInit();
  }, [handleInit]);

  const theme = useMemo(() => {
    if (mode === 'night') {
      return nightTheme;
    }
    return defaultTheme;
  }, [mode]);

  return {
    theme,
    toggleMode,
    updateMode,
    mode,
    loaded,
  };
};

export default useThemeMode;

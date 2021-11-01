import { useEffect, useCallback, useState, useMemo } from 'react';
import { createState, useState as useGlobalState } from '@hookstate/core';
import defaultTheme, { nightTheme } from 'theme';
import { getThemeMode, setThemeMode } from 'utils/storage';

type Mode = 'day' | 'night';

export const globalMode = createState<Mode>('day');

const useThemeMode = () => {
  const { set, value: mode, get } = useGlobalState(globalMode);

  const [loaded, setLoaded] = useState(false);

  const updateMode = useCallback(
    (newMode: Mode, update = true) => {
      const m = get();
      if (m !== newMode) {
        setThemeMode(newMode);
        if (update) {
          set(newMode);
        }
      }
    },
    [set, get],
  );

  const toggleMode = useCallback(() => {
    set(mode === 'day' ? 'night' : 'day');
  }, [set, mode]);

  const handleInit = useCallback(() => {
    const cachedMode = getThemeMode();
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

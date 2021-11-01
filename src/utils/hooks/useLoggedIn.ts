import { useEffect, useCallback, useState } from 'react';
import { createState, useState as useGlobalState } from '@hookstate/core';
import { getLoggedIn, setLoggedIn } from 'utils/storage';

const globalState = createState(false);

const useLoggedIn = () => {
  const { set, value: isLoggedIn, get } = useGlobalState(globalState);

  const [loaded, setLoaded] = useState(false);

  const updateLoggedIn = useCallback(
    (loggedIn = true) => {
      const m = get();
      if (m !== loggedIn) {
        setLoggedIn(loggedIn);
        set(loggedIn);
      }
    },
    [set, get],
  );

  const handleInit = useCallback(() => {
    const cachedLoggedIn = getLoggedIn();
    if (cachedLoggedIn !== undefined && isLoggedIn !== cachedLoggedIn) {
      set(cachedLoggedIn);
    }
    setLoaded(true);
  }, [set, isLoggedIn]);

  useEffect(() => {
    handleInit();
  }, [handleInit]);

  return {
    isLoggedIn,
    updateLoggedIn,
    loaded,
  };
};

export default useLoggedIn;

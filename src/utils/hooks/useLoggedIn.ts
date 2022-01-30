import { useEffect, useCallback, useState } from 'react';
import { createState, useState as useGlobalState } from '@hookstate/core';
import { getLoggedIn, setLoggedIn } from 'utils/storage';

const globalState = createState(false);

const useLoggedIn = () => {
  const { set, value: isLoggedIn } = useGlobalState(globalState);

  const [loaded, setLoaded] = useState(false);

  const updateLoggedIn = useCallback(
    (loggedIn = true) => {
      setLoggedIn(loggedIn);
      set(loggedIn);
    },
    [set],
  );

  const handleInit = useCallback(async () => {
    const cachedLoggedIn = await getLoggedIn();
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

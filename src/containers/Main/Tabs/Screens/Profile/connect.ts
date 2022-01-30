import { useCallback } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLoggedIn } from 'utils';

const useConnect = () => {
  const { top: safeTop } = useSafeAreaInsets();

  const { updateLoggedIn } = useLoggedIn();

  const handlePressLogout = useCallback(() => {
    updateLoggedIn(false);
  }, [updateLoggedIn]);

  return {
    safeTop,
    handlePressLogout,
  };
};

export default useConnect;

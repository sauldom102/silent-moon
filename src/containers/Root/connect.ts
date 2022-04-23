import { useCallback, useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { navigationRef } from 'navigator/service';

const useConnect = () => {
  const handleInit = useCallback(async () => {
    const status = await RNBootSplash.getVisibilityStatus();
    if (status !== 'hidden') RNBootSplash.hide({ fade: true });
  }, []);

  useEffect(() => {
    handleInit();
  }, [handleInit]);

  return {
    navigationRef,
  };
};

export default useConnect;

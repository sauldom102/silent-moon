import { useCallback } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const useConnect = () => {
  const { top: safeTop } = useSafeAreaInsets();

  const handlePressActivityCard = useCallback(() => {}, []);

  return {
    safeTop,
    handlePressActivityCard,
  };
};

export default useConnect;

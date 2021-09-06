import { useCallback } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useThemeMode from 'theme/useThemeMode';

const useConnect = () => {
  const { bottom: safeBottom } = useSafeAreaInsets();

  const { toggleMode } = useThemeMode();

  const handlePressLogin = useCallback(() => {}, []);

  const handlePressSignUp = useCallback(() => {
    toggleMode();
  }, [toggleMode]);

  return {
    handlePressLogin,
    handlePressSignUp,
    safeBottom,
  };
};

export default useConnect;

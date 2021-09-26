import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Props } from './types';

const useConnect = () => {
  const { bottom: safeBottom } = useSafeAreaInsets();

  const { navigate } = useNavigation<Props['navigation']>();

  const handlePressLogin = useCallback(() => {
    navigate('Login');
  }, [navigate]);

  const handlePressSignUp = useCallback(() => {
    navigate('SignUp');
  }, [navigate]);

  return {
    handlePressLogin,
    handlePressSignUp,
    safeBottom,
  };
};

export default useConnect;

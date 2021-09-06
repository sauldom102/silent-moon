import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Props } from './types';

const useConnect = () => {
  const { navigate } = useNavigation<Props['navigation']>();

  const { bottom: safeBottom } = useSafeAreaInsets();

  const handelPressGetStarted = useCallback(() => {
    navigate('ChooseTopic');
  }, [navigate]);

  return {
    handelPressGetStarted,
    safeBottom,
  };
};

export default useConnect;

import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Props } from './types';

const useConnect = () => {
  const { canGoBack, goBack } = useNavigation<Props['navigation']>();

  const { bottom: safeBottom } = useSafeAreaInsets();

  const handelPressGetStarted = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  return {
    handelPressGetStarted,
    safeBottom,
  };
};

export default useConnect;

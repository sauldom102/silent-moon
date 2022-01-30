import { useCallback, useMemo } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COURSES } from 'models/Course';
import { Props } from './types';

const useConnect = () => {
  const { navigate, canGoBack, goBack } = useNavigation<Props['navigation']>();
  const {
    params: { id },
  } = useRoute<Props['route']>();

  const { bottom: safeBottom } = useSafeAreaInsets();

  const handlePressClose = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  const handlePressPlayButton = useCallback(
    (itemId: string) => {
      navigate('MusicPlayer', {
        id: itemId,
        type: 'courseMusic',
      });
    },
    [navigate],
  );

  const item = useMemo(() => COURSES.find((s) => s.id === id), [id]);

  return {
    item,
    handlePressClose,
    handlePressPlayButton,
    safeBottom,
  };
};

export default useConnect;

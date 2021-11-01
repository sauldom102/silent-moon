import { useCallback, useMemo } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { COURSES } from 'models/Course';
import useThemeMode from 'theme/useThemeMode';
import { Props } from './types';

const useConnect = () => {
  const { mode } = useThemeMode();

  const { navigate, canGoBack, goBack } = useNavigation<Props['navigation']>();
  const {
    params: { id },
  } = useRoute<Props['route']>();

  const handlePressClose = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  const handlePressPlayButton = useCallback(() => {
    navigate('MusicPlayer', {
      id,
      type: 'courseMusic',
    });
  }, [navigate, id]);

  const item = useMemo(() => COURSES.find((s) => s.id === id), [id]);

  return {
    item,
    isNightMode: mode === 'night',
    handlePressClose,
    handlePressPlayButton,
  };
};

export default useConnect;

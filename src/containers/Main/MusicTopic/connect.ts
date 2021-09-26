import { useCallback, useMemo } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { STORY_TYPES } from 'models';
import { STORY_ITEMS } from 'models/StoryItem';
import useThemeMode from 'theme/useThemeMode';
import { useNavigationActions } from 'utils';
import { Props } from './types';

const useConnect = () => {
  const { canGoBack, goBack } = useNavigation<Props['navigation']>();
  const {
    params: { id },
  } = useRoute<Props['route']>();

  const { handleOpenStoryItem } = useNavigationActions();

  const { mode } = useThemeMode();
  const isNightMode = mode === 'night';

  const type = useMemo(() => STORY_TYPES.find((t) => t.id === id), [id]);

  const { title } = type ?? {};

  const handleGoBack = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  const items = useMemo(
    () =>
      STORY_ITEMS.filter((it) =>
        isNightMode ? it.topic === 'Sleep Music' : it.topic === 'Meditation',
      ),
    [isNightMode],
  );

  return {
    title,
    items,
    handleGoBack,
    handleOpenStoryItem,
    isNightMode,
  };
};

export default useConnect;

import { useCallback, useMemo } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { STORY_TYPES } from 'models';
import { STORY_ITEMS } from 'models/StoryItem';
import { useNavigationActions } from 'utils';
import { Props } from './types';

const useConnect = () => {
  const { canGoBack, goBack } = useNavigation<Props['navigation']>();
  const {
    params: { id, fromSleep },
  } = useRoute<Props['route']>();

  const { handleOpenStoryItem } = useNavigationActions();

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
        fromSleep ? it.topic === 'Sleep Music' : it.topic === 'Meditation',
      ),
    [fromSleep],
  );

  return {
    title,
    fromSleep,
    items,
    handleGoBack,
    handleOpenStoryItem,
  };
};

export default useConnect;

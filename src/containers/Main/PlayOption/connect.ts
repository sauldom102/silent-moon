import { useCallback, useMemo } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { STORY_ITEMS } from 'models/StoryItem';
import { useNavigationActions } from 'utils/hooks';
import { Props } from './types';

const useConnect = () => {
  const { navigate, canGoBack, goBack } = useNavigation<Props['navigation']>();
  const {
    params: { id },
  } = useRoute<Props['route']>();

  const { handleOpenStoryItem } = useNavigationActions();

  const { bottom: safeBottom } = useSafeAreaInsets();

  const handlePressClose = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  const handlePressPlayButton = useCallback(() => {
    navigate('MusicPlayer', {
      id,
      type: 'story',
    });
  }, [navigate, id]);

  const item = useMemo(() => STORY_ITEMS.find((s) => s.id === id), [id]);

  const itemTopic = item?.topic;
  const relatedItems = useMemo(
    () =>
      itemTopic
        ? STORY_ITEMS.filter((s) => s.topic === itemTopic && s.id !== id)
        : [],
    [id, itemTopic],
  );

  return {
    item,
    relatedItems,
    safeBottom,
    handlePressClose,
    handleOpenStoryItem,
    handlePressPlayButton,
  };
};

export default useConnect;

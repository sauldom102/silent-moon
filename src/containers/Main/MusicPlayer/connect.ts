import { useCallback, useMemo } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { COURSE_MUSIC_ITEMS } from 'models/CourseMusic';
import { MEDITATION_ITEMS } from 'models/MeditationItem';
import { STORY_ITEMS } from 'models/StoryItem';
import useThemeMode from 'theme/useThemeMode';
import { Props } from './types';

const useConnect = () => {
  const { canGoBack, goBack } = useNavigation<Props['navigation']>();
  const {
    params: { id, type },
  } = useRoute<Props['route']>();

  const { mode } = useThemeMode();
  const isNightMode = mode === 'night';

  const item = useMemo(() => {
    if (type === 'meditation') {
      return MEDITATION_ITEMS.find((it) => it.id === id);
    }
    if (type === 'story') {
      return STORY_ITEMS.find((it) => it.id === id);
    }
    if (type === 'courseMusic') {
      return COURSE_MUSIC_ITEMS.find((it) => it.id === id);
    }
    return undefined;
  }, [id, type]);

  const { title } = item ?? {};
  const image = item && 'image' in item ? item.image : undefined;

  const subtitle = useMemo(() => {
    if (type === 'meditation') {
      return 'Meditation';
    }
    if (type === 'story') {
      return 'Story';
    }
    return undefined;
  }, [type]);

  const handlePressClose = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  return {
    handlePressClose,
    title,
    subtitle,
    image,
    isNightMode,
  };
};

export default useConnect;

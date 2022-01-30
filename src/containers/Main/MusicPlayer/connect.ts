import { useCallback, useMemo, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AUDIONATIX_URL } from 'config';
import { COURSE_MUSIC_ITEMS } from 'models/CourseMusic';
import { MEDITATION_ITEMS } from 'models/MeditationItem';
import { STORY_ITEMS } from 'models/StoryItem';
import { openWebLink } from 'utils';
import { Props } from './types';

const useConnect = () => {
  const { canGoBack, goBack } = useNavigation<Props['navigation']>();
  const {
    params: { id, type },
  } = useRoute<Props['route']>();

  const [headerHeight, setHeaderHeight] = useState(0);

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

  const { title, isDark } = item ?? {};
  const image = item && 'image' in item ? item.image : undefined;
  const backgroundColor =
    item && 'backgroundColor' in item ? item.backgroundColor : undefined;

  const subtitle = useMemo(() => {
    if (type === 'meditation') {
      return 'Meditation';
    }
    if (type === 'story') {
      return 'Story';
    }
    if (type === 'courseMusic') {
      return 'Course';
    }
    return undefined;
  }, [type]);

  const handlePressClose = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  const handlePressCredits = useCallback(() => {
    openWebLink(AUDIONATIX_URL);
  }, []);

  return {
    handlePressClose,
    title,
    subtitle,
    item,
    isDark,
    image,
    backgroundColor,
    headerHeight,
    setHeaderHeight,
    handlePressCredits,
  };
};

export type UseConnect = ReturnType<typeof useConnect>;

export default useConnect;

import { useCallback } from 'react';
import StoryItem from 'models/StoryItem';
import { push } from 'navigator/service';
import useThemeMode from 'theme/useThemeMode';

const useNavigationActions = () => {
  const { updateMode } = useThemeMode();

  const handleOpenStoryItem = useCallback(
    (id: string, topic: StoryItem['topic']) => {
      updateMode(topic === 'Sleep Music' ? 'night' : 'day');
      push('PlayOption', {
        id,
      });
    },
    [updateMode],
  );

  return {
    handleOpenStoryItem,
  };
};

export default useNavigationActions;

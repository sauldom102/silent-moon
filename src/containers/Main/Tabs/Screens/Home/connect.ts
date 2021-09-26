import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigationActions } from 'utils';
import { Props } from './types';

const useConnect = () => {
  const { top: safeTop } = useSafeAreaInsets();

  const { navigate } = useNavigation<Props['navigation']>();

  const { handleOpenStoryItem } = useNavigationActions();

  const handlePressActivityCard = useCallback(() => {}, []);

  const handlePressDailyThought = useCallback(() => {
    navigate('Reminders');
  }, [navigate]);

  return {
    safeTop,
    handlePressActivityCard,
    handleOpenStoryItem,
    handlePressDailyThought,
  };
};

export default useConnect;

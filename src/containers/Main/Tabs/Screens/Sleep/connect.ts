import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useNavigationActions } from 'utils';
import { ITEMS } from './constants';
import { Props } from './types';

const useConnect = () => {
  const { navigate } = useNavigation<Props['navigation']>();

  const { handleOpenStoryItem } = useNavigationActions();

  const handlePressStart = useCallback(() => {}, []);

  const handlePressStoryType = useCallback(
    (id: string) => {
      navigate('MusicTopic', {
        id,
        fromSleep: true,
      });
    },
    [navigate],
  );

  const handlePressInfo = useCallback(() => {
    navigate('SleepWelcome');
  }, [navigate]);

  return {
    items: ITEMS,
    handlePressStart,
    handleOpenStoryItem,
    handlePressStoryType,
    handlePressInfo,
  };
};

export default useConnect;

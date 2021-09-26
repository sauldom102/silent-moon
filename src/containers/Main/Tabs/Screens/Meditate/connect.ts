import { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import chunk from 'lodash/chunk';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MEDITATION_ITEMS } from 'models/MeditationItem';
import { Props } from './types';

const useConnect = () => {
  const { navigate } = useNavigation<Props['navigation']>();

  const { top: safeTop, bottom: safeBottom } = useSafeAreaInsets();

  const handlePressActivityCard = useCallback(() => {}, []);

  const handlePressStoryType = useCallback(
    (id: string) => {
      navigate('MusicTopic', {
        id,
      });
    },
    [navigate],
  );

  const handlePressMeditationItem = useCallback(
    ({ childrenProps }) => {
      const { id } = childrenProps ?? {};
      if (id) {
        navigate('MusicPlayer', {
          id,
          type: 'meditation',
        });
      }
    },
    [navigate],
  );

  const data = useMemo(() => {
    const chunked = chunk(MEDITATION_ITEMS, 4);
    return chunked.map((items) => {
      const finalItems = items.reduce(
        (obj, it) => ({
          ...obj,
          [it.layout]: {
            childrenProps: {
              id: it.id,
              title: it.title,
              image: it.image,
            },
          },
        }),
        {},
      );

      return {
        layout: 'layout-1',
        items: finalItems,
      };
    });
  }, []);

  return {
    safeTop,
    safeBottom,
    data,
    handlePressActivityCard,
    handlePressMeditationItem,
    handlePressStoryType,
  };
};

export default useConnect;

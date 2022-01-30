import { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import chunk from 'lodash/chunk';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ITEMS } from './constants';
import { Props } from './types';

const useConnect = () => {
  const { top: safeTop, bottom: safeBottom } = useSafeAreaInsets();

  const { navigate } = useNavigation<Props['navigation']>();

  const data = useMemo(() => {
    const chunked = chunk(ITEMS, 4);
    return chunked.map((items) => {
      const finalItems = items.reduce(
        (obj, it) => ({
          ...obj,
          [it.layout]: {
            color: it.color,
            childrenProps: {
              title: it.title,
              titleColor: it.titleColor,
              image: it.image,
              imageSpecs: it.imageSpecs,
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

  const handlePressItem = useCallback(() => {
    navigate('Tabs');
  }, [navigate]);

  return {
    safeTop,
    safeBottom,
    data,
    handlePressItem,
  };
};

export default useConnect;

import { useMemo } from 'react';
import chunk from 'lodash/chunk';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ITEMS } from './constants';

const useConnect = () => {
  const { top: safeTop, bottom: safeBottom } = useSafeAreaInsets();

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

  return {
    safeTop,
    safeBottom,
    data,
  };
};

export default useConnect;

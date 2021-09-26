import { LayoutType } from 'react-native-json-grid-list';

// eslint-disable-next-line import/prefer-default-export
export const GRID_LAYOUT = {
  spacing: 20,
  height: 397,
  borderRadius: 10,
  layouts: [
    {
      id: 'column-1',
      type: LayoutType.COLUMN,
      layouts: [
        {
          id: 'item-1',
          flex: 1.26,
        },
        {
          id: 'item-2',
        },
      ],
    },
    {
      id: 'column-2',
      type: LayoutType.COLUMN,
      layouts: [
        {
          id: 'item-3',
          flex: 0.8,
        },
        {
          id: 'item-4',
        },
      ],
    },
  ],
};

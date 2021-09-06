import { LayoutType } from 'react-native-json-grid-list';

export const LAYOUTS = {
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

const BETTER_SLEEP_IMG = require('assets/images/topics/better-sleep.png');
const IMPROVE_PERFORMANCE_IMG = require('assets/images/topics/improve-performance.png');
const INCREASE_HAPPINESS_IMG = require('assets/images/topics/increase-happiness.png');
const PERSONAL_GROWTH_IMG = require('assets/images/topics/personal-growth.png');
const REDUCE_ANXIETY_IMG = require('assets/images/topics/reduce-anxiety.png');
const REDUCE_STRESS_IMG = require('assets/images/topics/reduce-stress.png');
const STUDYING_IMG = require('assets/images/topics/studying.png');

export const ITEMS = [
  {
    color: '#8E97FD',
    title: 'Reduce Stress',
    titleColor: '#FEF9F3',
    image: REDUCE_STRESS_IMG,
    imageSpecs: {
      height: 204,
      topSpacing: -37,
      horizontalSpacing: 0,
    },
    layout: 'item-1',
  },
  {
    color: '#FA6E5A',
    title: 'Improve Performance',
    titleColor: '#FEF9F3',
    image: IMPROVE_PERFORMANCE_IMG,
    imageSpecs: {
      height: 85,
      topSpacing: 9,
      horizontalSpacing: 29,
    },
    layout: 'item-3',
  },
  {
    color: '#FEB18F',
    title: 'Increase Happiness',
    titleColor: '#3F414E',
    image: INCREASE_HAPPINESS_IMG,
    imageSpecs: {
      height: 98,
    },
    layout: 'item-2',
  },
  {
    color: '#FFCF86',
    title: 'Reduce Anxiety',
    titleColor: '#3F414E',
    image: REDUCE_ANXIETY_IMG,
    imageSpecs: {
      height: 122,
      topSpacing: 15,
      horizontalSpacing: 18,
    },
    layout: 'item-4',
  },

  {
    color: '#6CB28E',
    title: 'Personal Growth',
    titleColor: '#FEF9F3',
    image: PERSONAL_GROWTH_IMG,
    imageSpecs: {
      height: 114,
      topSpacing: 9,
    },
    layout: 'item-1',
  },
  {
    color: '#3F414E',
    title: 'Better Sleep',
    titleColor: '#EBEAEC',
    image: BETTER_SLEEP_IMG,
    imageSpecs: {
      height: 86,
    },
    layout: 'item-3',
  },
  {
    color: '#8E97FD',
    title: 'Mindfulness',
    titleColor: '#FEF9F3',
    image: REDUCE_STRESS_IMG,
    imageSpecs: {
      height: 204,
      topSpacing: -37,
      horizontalSpacing: 0,
    },
    layout: 'item-2',
  },
  {
    color: '#D9A5B5',
    title: 'Better Organization',
    titleColor: '#FEF9F3',
    image: STUDYING_IMG,
    imageSpecs: {
      height: 105,
      topSpacing: 17,
      horizontalSpacing: 21,
    },
    layout: 'item-4',
  },
];

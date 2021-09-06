import flatten from 'lodash/flatten';
import range from 'lodash/range';
import uniqueId from 'lodash/uniqueId';
import { colors } from 'theme';

export const ACTIVITY_CARDS = [
  {
    title: 'Basics',
    topic: 'Course',
    color: colors.primary,
    duration: ' 3-10 min',
    light: true,
  },
  {
    title: 'Relaxation',
    topic: 'Music',
    color: '#FFDB9D',
    duration: ' 3-10 min',
  },
].map((a) => ({
  ...a,
  id: uniqueId(),
}));

const FOCUS_IMG = require('assets/images/music/focus.png');
const HAPPINESS_IMG = require('assets/images/music/happiness.png');

export const RECOMMENDED_MUSIC_CARDS = flatten(
  range(5).map(() =>
    [
      {
        title: 'Focus',
        topic: 'Meditation',
        duration: '3-10 min',
        image: FOCUS_IMG,
        color: '#AFDBC5',
      },
      {
        title: 'Happiness',
        topic: 'Meditation',
        duration: '3-10 min',
        image: HAPPINESS_IMG,
        color: '#FBD89F',
      },
    ].map((c) => ({
      ...c,
      id: uniqueId(),
    })),
  ),
);

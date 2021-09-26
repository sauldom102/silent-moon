import uniqueId from 'lodash/uniqueId';
import { ArrayElement } from 'utils/typescript';

const FOCUS_IMG = require('assets/images/music/focus.png');
const HAPPINESS_IMG = require('assets/images/music/happiness.png');
const MOON_CLOUDS_IMG = require('assets/images/sleep/moon-clouds.png');
const NIGHT_SLEEP_IMG = require('assets/images/sleep/night-sleep.png');
const PINK_MOON_IMG = require('assets/images/sleep/pink-moon.png');
const SWEET_SLEEP_IMG = require('assets/images/sleep/sweet-sleep.png');

export const STORY_ITEMS = [
  {
    title: 'Focus',
    topic: 'Meditation',
    duration: '3-10 min',
    image: FOCUS_IMG,
    color: '#AFDBC5',
    backgroundColor: '#AFDBC5',
  },
  {
    title: 'Happiness',
    topic: 'Meditation',
    duration: '3-10 min',
    image: HAPPINESS_IMG,
    color: '#FBD89F',
    backgroundColor: '#FBD89F',
  },
  ...[
    {
      title: 'Night Island',
      image: NIGHT_SLEEP_IMG,
      backgroundColor: '#4C53B4',
    },
    {
      title: 'Sweet Sleep',
      image: SWEET_SLEEP_IMG,
      backgroundColor: '#4C53B4',
    },
    {
      title: 'Good Night',
      image: MOON_CLOUDS_IMG,
      backgroundColor: '#3E476E',
    },
    {
      title: 'Moon Clouds',
      image: PINK_MOON_IMG,
      backgroundColor: '#554A96',
    },
  ].map((c) => ({
    ...c,
    topic: 'Sleep Music',
    duration: '45 min',
    color: '#fff',
    backgroundColor: c.backgroundColor ?? '#fff',
  })),
].map((c) => ({
  ...c,
  id: uniqueId(),
}));

type StoryItem = ArrayElement<typeof STORY_ITEMS>;

export default StoryItem;

import uniqueId from 'lodash/uniqueId';
import { STORY_ITEMS } from 'models/StoryItem';
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

export const RECOMMENDED_MUSIC_CARDS = STORY_ITEMS.filter(
  (s) => s.topic === 'Meditation',
);

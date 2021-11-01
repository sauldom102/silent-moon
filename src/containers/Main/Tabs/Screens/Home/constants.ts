import uniqueId from 'lodash/uniqueId';
import { COURSES } from 'models/Course';
import { STORY_ITEMS } from 'models/StoryItem';

export const ACTIVITY_CARDS = [
  ...COURSES.map((c) => ({
    ...c,
    topic: 'Course',
  })),
  {
    title: 'Relaxation',
    topic: 'Music',
    color: '#FFC97E',
    duration: ' 3-10 min',
  },
].map((a) => ({
  ...a,
  id: 'id' in a ? a.id : uniqueId(),
}));

export const RECOMMENDED_MUSIC_CARDS = STORY_ITEMS.filter(
  (s) => s.topic === 'Meditation',
);

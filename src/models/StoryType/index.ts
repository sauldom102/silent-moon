import { ArrayElement } from 'utils';

export const STORY_TYPES = [
  {
    id: 'all',
    title: 'All',
    icon: 'all' as const,
  },
  {
    id: 'liked',
    title: 'Liked',
    icon: 'heart' as const,
  },
  {
    id: 'anxious',
    title: 'Anxious',
    icon: 'sad-face' as const,
  },
  {
    id: 'sleep',
    title: 'Sleep',
    icon: 'sleep' as const,
  },
  {
    id: 'kids',
    title: 'Kids',
    icon: 'kid-face' as const,
  },
];

type StoryType = ArrayElement<typeof STORY_TYPES>;

export default StoryType;

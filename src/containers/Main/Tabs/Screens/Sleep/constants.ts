import { STORY_ITEMS } from 'models/StoryItem';

// eslint-disable-next-line import/prefer-default-export
export const ITEMS = STORY_ITEMS.filter((s) => s.topic === 'Sleep Music');

import uniqueId from 'lodash/uniqueId';
import { COURSES } from 'models/Course';
import { ArrayElement } from 'utils/typescript';

export const COURSE_MUSIC_ITEMS = [
  {
    title: 'Focus Attention',
    duration: '10 min',
  },
  {
    title: 'Body Scan',
    duration: '5 min',
  },
  {
    title: 'Making Happiness',
    duration: '3 min',
  },
].map((c) => ({
  ...c,
  id: uniqueId(),
  courseId: COURSES[0].id,
}));

type CourseMusic = ArrayElement<typeof COURSE_MUSIC_ITEMS>;

export default CourseMusic;

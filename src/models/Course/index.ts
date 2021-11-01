import uniqueId from 'lodash/uniqueId';
import { colors } from 'theme';
import { ArrayElement } from 'utils';

const BASICS_IMAGE = require('assets/images/courses/basics-course.png');

// eslint-disable-next-line import/prefer-default-export
export const COURSES = [
  {
    id: uniqueId(),
    title: 'Basics',
    description:
      'Ease the mind into a restful night’s sleep with these deep, amblent tones.',
    color: colors.primary,
    image: BASICS_IMAGE,
    duration: '3-10 min',
    light: true,
  },
];

type Course = ArrayElement<typeof COURSES>;

export default Course;

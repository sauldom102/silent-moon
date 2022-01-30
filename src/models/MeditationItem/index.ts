import flatten from 'lodash/flatten';
import range from 'lodash/range';
import uniqueId from 'lodash/uniqueId';
import { ArrayElement } from 'utils';

const ANXIET_RELEASE_IMG = require('assets/images/meditate/anxiet-release.png');
const DAYS_OF_CALM_IMG = require('assets/images/meditate/days-of-calm.png');
const FOCUS_ATTENTION_IMG = require('assets/images/meditate/focus-attention.png');
const HOW_TO_MEDITATE_IMG = require('assets/images/meditate/how-to-meditate.png');

// eslint-disable-next-line import/prefer-default-export
export const MEDITATION_ITEMS = flatten(
  range(3).map(() => [
    {
      title: '7 Days of Calm',
      image: DAYS_OF_CALM_IMG,
      uri: 'https://audionautix.com/Music/Namaste.mp3',
      layout: 'item-1',
    },
    {
      title: 'Anxiet Release',
      image: ANXIET_RELEASE_IMG,
      uri: 'https://audionautix.com/Music/RunningWaters.mp3',
      layout: 'item-3',
    },
    {
      title: 'How to Meditate',
      image: HOW_TO_MEDITATE_IMG,
      uri: 'https://audionautix.com/Music/12Mornings.mp3',
      layout: 'item-2',
    },
    {
      title: 'Focus Attention',
      image: FOCUS_ATTENTION_IMG,
      uri: 'https://audionautix.com/Music/Ohm.mp3',
      layout: 'item-4',
    },
  ]),
).map((it) => ({
  ...it,
  id: uniqueId(),
  isDark: false,
}));

type MeditationItem = ArrayElement<typeof MEDITATION_ITEMS>;

export default MeditationItem;

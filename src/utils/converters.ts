import padStart from 'lodash/padStart';

const validateNumbers = (millis: number, time: string) => {
  switch (time) {
    case 'MMSSSeconds':
      return Math.floor(millis % 60) >= 0 ? Math.floor(millis % 60) : 0;
    case 'MMSSMinutes':
      return Math.floor(millis / 60) >= 0 ? Math.floor(millis / 60) : 0;
    default:
      return 0;
  }
};

// eslint-disable-next-line import/prefer-default-export
export const getMMSSFromSeconds = (totalSeconds: number) => {
  const seconds = validateNumbers(totalSeconds, 'MMSSSeconds');
  const minutes = validateNumbers(totalSeconds, 'MMSSMinutes');
  return `${padStart(minutes.toString(), 2, '0')}:${padStart(
    seconds.toString(),
    2,
    '0',
  )}`;
};

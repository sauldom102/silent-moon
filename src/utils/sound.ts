import { createRef, MutableRefObject } from 'react';

const Sound = require('react-native-sound');

const { setActive, setCategory } = Sound;

export const sound = createRef() as MutableRefObject<SoundType>;

export const playingSound = createRef() as MutableRefObject<SoundType>;

export const soundPath = createRef() as MutableRefObject<string>;

export const playingSoundPath = createRef() as MutableRefObject<string>;

type SetSoundResult = {
  existing: boolean;
  playing: boolean;
  duration: number;
};

export const setSound = (uri: string) => {
  let result: SetSoundResult;

  if (sound.current && uri === soundPath.current) {
    return new Promise<SetSoundResult>((res) => {
      result = {
        existing: true,
        duration: sound.current?.getDuration() ?? 0,
        playing: sound.current.isPlaying(),
      };
      res(result);
    });
  }

  soundPath.current = uri;
  return new Promise<SetSoundResult>((res) => {
    sound.current = new Sound(uri, undefined, (error: any) => {
      if (error) {
        return;
      }

      result = {
        existing: false,
        duration: sound.current?.getDuration() ?? 0,
        playing: sound.current.isPlaying(),
      };
      res(result);
    });
  });
};

export const playSound = (uri: string, cb?: (success: boolean) => void) => {
  setCategory('Playback', false);
  setActive(true);

  if (playingSound.current && soundPath.current !== playingSoundPath.current) {
    playingSound.current.stop();
    playingSound.current.release();
  }

  playingSound.current = sound.current;
  playingSoundPath.current = uri;

  sound.current?.play((success: boolean) => {
    cb?.(success);
    sound.current?.stop();
    setActive(false);
  });
};

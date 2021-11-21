import { useEffect, useCallback, useRef, useState, useMemo } from 'react';
import { useRoute } from '@react-navigation/native';
import { useSharedValue } from 'react-native-reanimated';
import {
  getMMSSFromSeconds,
  initMusicControls,
  setMusicControlsEvents,
  useCurrentPlaying,
} from 'utils';
import { sound, playSound, setSound } from 'utils/sound';
import { UseConnect } from './connect';
import { Props } from './types';

type UseLogicParams = {
  item?: UseConnect['item'];
  subtitle?: string;
};

const useLogic = ({ item, subtitle }: UseLogicParams) => {
  const { uri } = item ?? {};

  const { setCurrentPlaying } = useCurrentPlaying();

  const { params } = useRoute<Props['route']>();

  const setAsPlaying = useRef(false);

  const [playing, setPlaying] = useState<boolean>();
  const [displayDuration, setDisplayDuration] = useState('00:00');

  const [currentSeconds, setCurrentSeconds] = useState(0);

  const displayCurrentTime = useMemo(
    () => getMMSSFromSeconds(currentSeconds),
    [currentSeconds],
  );

  const sliding = useRef(false);

  const progress = useSharedValue(0);

  const duration = useRef(0);

  const interval = useRef<ReturnType<typeof setInterval>>();

  const handleInit = useCallback(async () => {
    if (uri) {
      const { duration: dur, playing: wasPlaying } = await setSound(uri);
      duration.current = dur;
      if (dur) {
        setDisplayDuration(getMMSSFromSeconds(dur));
      }
      setPlaying(wasPlaying);
    }
  }, [uri]);

  useEffect(() => {
    handleInit();
  }, [handleInit]);

  const clearTheInterval = useCallback(() => {
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = undefined;
    }
  }, []);

  const updateSeconds = useCallback(
    (seconds: number) => {
      setCurrentSeconds(seconds);
      if (!sliding.current) {
        progress.value = seconds / duration.current;
      }
    },
    [progress],
  );

  const handleTogglePlay = useCallback(() => {
    if (uri) {
      if (playing) {
        if (!setAsPlaying.current) {
          setAsPlaying.current = true;
          setCurrentPlaying(params);
        }
        playSound(uri, () => {
          setPlaying(false);
        });
        if (duration.current) {
          interval.current = setInterval(() => {
            sound.current?.getCurrentTime(updateSeconds);
          }, 1000 / 30);
        }
      } else {
        clearTheInterval();
        sound.current?.getCurrentTime(updateSeconds);
        sound.current?.pause();
      }
    }
  }, [
    setCurrentPlaying,
    params,
    playing,
    uri,
    clearTheInterval,
    updateSeconds,
  ]);

  const togglePlay = useCallback(() => {
    setPlaying((p) => !p);
  }, []);

  const initializeMusicControls = useCallback(() => {
    if (item) {
      initMusicControls({
        title: item.title,
        duration: duration.current,
        image: 'image' in item ? item.image : undefined,
        album: subtitle,
        artist: 'Jason Shaw',
      });
      setMusicControlsEvents(togglePlay);
    }
  }, [item, subtitle, togglePlay]);

  useEffect(() => {
    if (uri && sound.current && playing !== undefined) {
      handleTogglePlay();
      if (playing) {
        initializeMusicControls();
      }
    }

    return clearTheInterval;
  }, [
    initializeMusicControls,
    uri,
    playing,
    handleTogglePlay,
    clearTheInterval,
  ]);

  const handleSliderChange = useCallback((p: number) => {
    if (duration.current && sound.current) {
      sound.current.setCurrentTime(p * duration.current);
    }
  }, []);

  const handleSlidePan = useCallback((active: boolean) => {
    sliding.current = active;
  }, []);

  const handlePressBackwards = useCallback(() => {
    if (duration.current && sound.current) {
      const newSeconds = Math.max(0, currentSeconds - 15);
      updateSeconds(newSeconds);
      sound.current.setCurrentTime(newSeconds);
    }
  }, [currentSeconds, updateSeconds]);

  const handlePressForward = useCallback(() => {
    if (duration.current && sound.current) {
      const newSeconds = Math.min(duration.current, currentSeconds + 15);
      updateSeconds(newSeconds);
      sound.current.setCurrentTime(newSeconds);
    }
  }, [currentSeconds, updateSeconds]);

  return {
    displayCurrentTime,
    displayDuration,
    playing,
    togglePlay,
    handleSliderChange,
    handleSlidePan,
    progress,
    handlePressBackwards,
    handlePressForward,
  };
};

export default useLogic;

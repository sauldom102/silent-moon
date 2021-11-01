import { useEffect, useCallback, useRef, useState, useMemo } from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { getMMSSFromSeconds } from 'utils';
import { sound, playSound, setSound } from 'utils/sound';

const useLogic = () => {
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

  const musicUri = 'https://audionautix.com/Music/12Mornings.mp3';

  const handleInit = useCallback(async () => {
    const { duration: dur, playing: wasPlaying } = await setSound(musicUri);
    duration.current = dur;
    if (dur) {
      setDisplayDuration(getMMSSFromSeconds(dur));
    }
    setPlaying(wasPlaying);
  }, [musicUri]);

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

  useEffect(() => {
    if (sound.current && playing !== undefined) {
      if (playing) {
        playSound(() => {
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

    return clearTheInterval;
  }, [playing, progress, updateSeconds, clearTheInterval]);

  const handleTogglePlay = useCallback(() => {
    setPlaying((p) => !p);
  }, []);

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
    handleTogglePlay,
    handleSliderChange,
    handleSlidePan,
    progress,
    handlePressBackwards,
    handlePressForward,
  };
};

export default useLogic;

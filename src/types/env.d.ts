declare type SoundType = {
  getDuration(): number;
  isPlaying(): boolean;
  play(cb: (success: boolean) => void): void;
  stop(): void;
  release(): void;
  pause(): void;
  setCurrentTime(time: number): void;
  getCurrentTime(cb: (time: number) => void): void;
};

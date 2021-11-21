import MusicControl, { Command } from 'react-native-music-control';
import { device } from 'theme';

type InitParams = {
  title: string;
  duration: number;
  image: string;
  album?: string;
  artist: string;
  playing?: boolean;
};

export const initMusicControls = ({
  title,
  duration,
  image,
  album,
  artist,
  playing = true,
}: InitParams) => {
  MusicControl.setNowPlaying({
    title,
    artwork: image,
    artist,
    album,
    duration, // In seconds
    color: 0xffffff, // Android Only - Notification Color
    colorized: true, // Android 8+ Only - Notification Color extracted from the artwork. Set to false to use the color property instead
    isLiveStream: true, // iOS Only (Boolean), Show or hide Live Indicator instead of seekbar on lock screen for live streams. Default value is false.
  });
  MusicControl.updatePlayback({
    state: playing ? MusicControl.STATE_PLAYING : MusicControl.STATE_PAUSED,
  });
};

export const setMusicControlsEvents = (onTogglePlayPause: () => void) => {
  // SET CONTROLS UI
  MusicControl.enableControl('play', true);
  MusicControl.enableControl('pause', true);
  MusicControl.enableControl('stop', false);
  MusicControl.enableControl('nextTrack', false);
  MusicControl.enableControl('previousTrack', false);
  // Changing track position on lockscreen
  MusicControl.enableControl('changePlaybackPosition', false);
  // Seeking
  MusicControl.enableControl('skipForward', false);
  MusicControl.enableControl('skipBackward', false);
  // iOS Specific Options
  MusicControl.enableControl('seekForward', false); // iOS only
  MusicControl.enableControl('seekBackward', false); // iOS only
  MusicControl.enableControl('enableLanguageOption', false);
  MusicControl.enableControl('disableLanguageOption', false);
  MusicControl.enableBackgroundMode(true); // Enable foreground service
  // Android Specific Options
  MusicControl.enableControl('seek', false);
  MusicControl.enableControl('setRating', false);
  MusicControl.enableControl('remoteVolume', false);
  MusicControl.enableControl('volume', false); // Only affected when remoteVolume is enabled
  MusicControl.enableControl('closeNotification', true, { when: 'never' }); // Never close notification on swipe

  // SET EVENT LISTENERS
  MusicControl.on(Command.play, () => {
    onTogglePlayPause();
    if (device.isIOS) {
      // On Android, handle this with updateMusicControlAndroid
      MusicControl.updatePlayback({
        state: MusicControl.STATE_PLAYING,
      });
    }
  });
  // On iOS this event will also be triggered by audio router change events
  // when headphones are unplugged or bluetooth audio peripheral disconnects from device
  MusicControl.on(Command.pause, () => {
    onTogglePlayPause();
    if (device.isIOS) {
      // On Android, handle this with updateMusicControlAndroid
      MusicControl.updatePlayback({
        state: MusicControl.STATE_PAUSED,
      });
    }
  });
};

export const resetMusicControls = () => {
  // Resets & hides the music controls
  MusicControl.resetNowPlaying();
};

export const stopMusicControls = () => {
  // Resets, hides the music controls and disables everything, included listeners
  MusicControl.stopControl();
};

export const updateMusicControlsAndroid = (isPlaying: boolean) => {
  // On Android, we need to manually update native notification play/pause button
  // if we handle audio inside app button, in order to update its status.
  // On iOS, this is automated due to its taking playback status from native AV session
  if (device.isAndroid) {
    if (isPlaying) {
      MusicControl.updatePlayback({
        state: MusicControl.STATE_PAUSED,
      });
    } else {
      MusicControl.updatePlayback({
        state: MusicControl.STATE_PLAYING,
      });
    }
  }
};

export const switchMusicControlsActivation = (isEnabled: boolean) => {
  MusicControl.enableControl('play', isEnabled);
  MusicControl.enableControl('pause', isEnabled);
};

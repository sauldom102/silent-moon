import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

// Logged in

const LOGGED_IN = 'logged-in';

export const setLoggedIn = (loggedIn = true) => {
  storage.set(LOGGED_IN, loggedIn);
};

export const getLoggedIn = () => storage.getBoolean(LOGGED_IN);

// Theme mode

const THEME_MODE = 'theme-mode';

type Mode = 'night' | 'day';

export const setThemeMode = (mode: Mode) => {
  storage.set(THEME_MODE, mode);
};

export const getThemeMode = () => storage.getString(THEME_MODE) as Mode;

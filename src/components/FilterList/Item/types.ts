export type Props = {
  id: string;
  title: string;
  icon: 'all' | 'heart' | 'sad-face' | 'sleep' | 'kid-face';
  onPress?: (id: string) => void;
  light?: boolean;
  active?: boolean;
};

type ActiveProps = {
  active: boolean;
};

export type IconProps = ActiveProps;

export type TitleProps = ActiveProps & {
  light: boolean;
};

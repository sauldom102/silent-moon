export type Props = {
  id: string;
  title: string;
  subtitle: string;
  playing?: boolean;
  onPressPlay?: (id: string) => void;
};

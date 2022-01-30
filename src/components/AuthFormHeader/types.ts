export type Props = {
  title: string;
  subtitle: string;
  onPressButton?: (type: 'facebook' | 'google') => void;
};

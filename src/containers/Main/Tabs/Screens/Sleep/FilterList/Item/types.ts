export type Props = {
  id: string;
  title: string;
  onPress?: (id: string) => void;
};

export type ActiveProps = {
  active: boolean;
};

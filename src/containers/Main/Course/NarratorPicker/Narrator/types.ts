export type Props = {
  id: string;
  title: string;
  onPress?: (id: string) => void;
  selected?: boolean;
};

export type SelectedProps = {
  selected: boolean;
};

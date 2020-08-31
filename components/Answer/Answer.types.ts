export type ContainerProps = {
  percentage: number;
  isMostVoted: boolean;
  isVoted: boolean;
};

export type Props = {
  percentage: number;
  isMostVoted: boolean;
  text: string;
  isSelected: boolean;
  isVoted: boolean;
  handleOnClick: () => void;
};

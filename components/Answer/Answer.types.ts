export type ContainerProps = {
  percentage: number;
  isMostVoted: boolean;
  isVoted: boolean;
  isClicked?: boolean;
  clicking: boolean;
  onClick: () => void;
};

export type Props = {
  percentage: number;
  isMostVoted: boolean;
  text: string;
  isSelected: boolean;
  isVoted: boolean;
  handleOnClick: () => void;
};

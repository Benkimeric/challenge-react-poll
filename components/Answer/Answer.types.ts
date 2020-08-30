export interface ContainerProps {
  percentage: number;
  isMostVoted: boolean;
  isVoted: boolean;
};


export interface Props {
  percentage: number;
  isMostVoted: boolean;
  text: string;
  isSelected: boolean;
  isVoted: boolean;
  handleOnClick: () => void;
}

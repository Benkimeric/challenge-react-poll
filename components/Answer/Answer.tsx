import React, { FC, useState } from 'react';
import styled, { keyframes, StyledComponent } from 'styled-components';
import { ContainerProps, Props } from './Answer.types';

const breatheAnimation = keyframes`
 0% { width: 30%; opacity: 0}
 40% { width: 40%; opacity: 0.3; }
 100% {  width: 100%; opacity: 0.6; }
`;

const AnswerContainer: FC<ContainerProps> = styled.div`
  border: 1px solid #c9c9c9;
  background: transparent;
  border-radius: 8px;
  padding: 8px 4px;
  margin-bottom: 8px;
  font-size: 16px;
  animation-name: ${breatheAnimation};
  transition: width .5s;
  animation-duration: 0.6s;
  width: ${({ selecting }) => selecting  ? '50%;': '100%'}
  font-weight: ${({ isMostVoted, isVoted }: ContainerProps) =>
    isMostVoted && isVoted && 'bold'};
  ${({ percentage, isMostVoted, isVoted }: ContainerProps) =>
    isVoted &&
    `background: linear-gradient(to right, ${
      isMostVoted ? 'cyan' : '#e8e9e8'
    }, ${
      isMostVoted ? 'cyan' : '#e8e9e8'
    } ${percentage}%, transparent ${percentage}%, transparent ${
      100 - percentage
    }%`});
`;

const Image:StyledComponent<"img", any, {}, never> = styled.img`
  margin-left: 8px;
`;

const PercentageVote:FC = styled.span`
  float: right;
  padding-right: 4px;
`;

const Answer: FC<Props> = (props: Props) => {
  const {
    percentage,
    isMostVoted,
    text,
    isSelected,
    handleOnClick,
    isVoted,
  } = props;

  const [selecting, setSelecting] = useState<boolean>(false);

  const handleVoting = ():void => {
    if (!isVoted) {
      setSelecting(true);
      handleOnClick();
      setTimeout(() =>{
        setSelecting(false)
      }, 200)
    }
    
  };

  return (
    <AnswerContainer
      isVoted={isVoted}
      isMostVoted={isMostVoted}
      percentage={percentage}
      onClick={handleVoting}
      selecting={selecting}
    >
      {text}
      {isVoted && <PercentageVote>{percentage}%</PercentageVote>}
      {isSelected && (
        <Image
          alt="User selected choice"
          height={18}
          src={require('../../static/check-circle.svg')}
        />
      )}
    </AnswerContainer>
  );
};

export default Answer;

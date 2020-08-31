import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

import { ContainerProps, Props } from './Answer.types';

const breatheAnimation = keyframes`
 0% { width: 30%; opacity: 0}
 40% { width: 40%; opacity: 0.3; }
 100% {  width: 100%; opacity: 0.6; }
`;

const AnswerContainer = styled.div`
  border: 1px solid #c9c9c9;
  background: transparent;
  border-radius: 8px;
  padding: 8px 4px;
  margin-bottom: 8px;
  font-size: 16px;
  animation-name: ${breatheAnimation};
  animation-duration: 0.6s;
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

const Image = styled.img`
  margin-left: 8px;
`;

const PercentageVote = styled.span`
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

  const handleVoting = () => {
    if (!isVoted) {
      handleOnClick();
    }
  };

  return (
    <AnswerContainer
      isVoted={isVoted}
      isMostVoted={isMostVoted}
      percentage={percentage}
      onClick={handleVoting}
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

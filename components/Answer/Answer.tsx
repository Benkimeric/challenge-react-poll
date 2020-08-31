import React, { FC } from 'react';
import styled from 'styled-components';

import { ContainerProps, Props } from './Answer.types';

const AnswerContainer = styled.div`
  border: 1px solid #c9c9c9;
  background: transparent;
  border-radius: 8px;
  padding: 8px 4px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: ${({isMostVoted, isVoted}: ContainerProps) => isMostVoted && isVoted && 'bold'};
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

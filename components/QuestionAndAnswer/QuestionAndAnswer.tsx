import React, { useState, FC } from 'react';
import styled from 'styled-components';

import Answer from '../Answer/Answer';
import { Props } from './QuestionAndAnswer.types';
import { QandA } from '../../types';

type Props1 = {
  isVoted: boolean;
};
const QuestionWrapper = styled.div`
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  max-width: 320px;
  ${({ isVoted }: Props1) =>
    isVoted ? 'cursor: not-allowed' : 'cursor: pointer'}
`;

const Question = styled.h2`
  color: #030d30;
`;

const TotalVotes = styled.p`
  color: #b5b5b5;
`;

const QuestionAndAnswer: FC<Props> = (props: Props) => {
  const { questionAndAnswer } = props;

  const [qAndA, setQAndA] = useState<QandA>(questionAndAnswer);
  const [selected, setSelected] = useState<number>();

  const mostVoted: number = Math.max(
    ...qAndA.answers.map(({ votes }) => votes)
  );

  const totalVotes = qAndA.answers
    .map((poll) => poll.votes)
    .reduce((prev, current) => prev + current);

  const handleClick = (index: number): void => {
    setQAndA((prev: QandA) => ({
      ...prev,
      answers: prev.answers.map((answer, position) =>
        index === position ? { ...answer, votes: answer.votes + 1 } : answer
      ),
    }));
    setSelected(index);
  };
  return (
    <QuestionWrapper isVoted={selected !== undefined}>
      <Question>{qAndA.question.text}</Question>
      {qAndA.answers.map((answer, index) => (
        <Answer
          percentage={Math.round((answer.votes / totalVotes) * 100)}
          isMostVoted={answer.votes === mostVoted}
          isVoted={selected !== undefined}
          isSelected={selected === index}
          text={answer.text}
          key={index}
          handleOnClick={() => handleClick(index)}
        />
      ))}
      <TotalVotes> {totalVotes} votes </TotalVotes>
    </QuestionWrapper>
  );
};

export default QuestionAndAnswer;

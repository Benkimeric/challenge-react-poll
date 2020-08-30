import React from 'react';
import styled from 'styled-components';

import Answer from '../Answer/Answer';

const Question = styled.h1`
  color: #040e31;
`;

const TotalVotes = styled.p`
color: #9a9a9a
`

const QuestionAndAnswer = () => {
  return (
    <>
      <Question>Which animal can produce the loudest sound</Question>
      <Answer
        percentage={25}
        isMostVoted={true}
        text="🐯 Tiger"
        isSelected={true}
        isVoted={true}
        handleOnClick={console.log}
      />
      <TotalVotes> 72 </TotalVotes>
    </>
  );
};

export default QuestionAndAnswer

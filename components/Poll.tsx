import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { QandAsDocument, QandA } from '../types';

import QuestionAndAnswer from './QuestionAndAnswer/QuestionAndAnswer';

type Props = {
  qandas: QandAsDocument /* q and a's -- questions and answers document */;
};

const PollWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Poll: FC<Props> = ({ qandas }: Props) => {
  console.log('questions and answers: ', qandas);
const { questions } = qandas;
  const [randomQuestion, setRandomQuestion] = useState<QandA>()

  useEffect(() => {
    setRandomQuestion(questions[Math.floor(Math.random() * questions.length)])
  }, [questions]);

  
  return (
    <PollWrapper>
      {randomQuestion && <QuestionAndAnswer questionAndAnswer={randomQuestion} />}
    </PollWrapper>
  );
};

export default Poll;

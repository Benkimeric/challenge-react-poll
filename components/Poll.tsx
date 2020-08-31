import React, { FC } from 'react';
import styled from 'styled-components';
import { QandAsDocument } from '../types';

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
  return (
    <PollWrapper>
      <QuestionAndAnswer questionAndAnswer={questions[0]} />
    </PollWrapper>
  );
};

export default Poll;

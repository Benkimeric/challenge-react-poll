import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../components/GlobalStyles';
import questions from '../questions.json';
import Poll from '../components/Poll';

const IndexPage = styled.div``;

const StyledParagraph = styled.p`
font-size: 16px;
color: #74788d;
`

export default () => (
  <IndexPage>
    <GlobalStyles />
    <h1>Decode React Poll Challenge</h1>
    <StyledParagraph>
      Here is some text that is on the page in a paragraph tag. The poll will
      appear within this context below.
    </StyledParagraph>
    <Poll qandas={questions} />
    <StyledParagraph>
      Here is the rest of the text on the page. We just have something down here
      for context to see it in.
    </StyledParagraph>
  </IndexPage>
);

/**
 * TIPS:
 *
 * You can load the check image like this:
 *
 *    <img src={require('../static/check-circle.svg')} />
 *
 */

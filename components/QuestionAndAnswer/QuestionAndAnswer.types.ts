import { QandA } from '../../types';

export type Props = {
  questionAndAnswer: QandA;
}

export type Answer = {
  text: string;
  votes: number;
};

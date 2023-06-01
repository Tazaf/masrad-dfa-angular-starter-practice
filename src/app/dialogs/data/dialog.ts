import { Message } from './message';

export type DiaLog = {
  id: number;
  contact: string;
  messages: Message[];
};

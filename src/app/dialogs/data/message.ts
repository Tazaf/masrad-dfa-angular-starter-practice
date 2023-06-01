import { DateTime } from 'luxon';

export type Alignment = 'left' | 'center' | 'right';

export type AuthorType = 'me' | 'them';

export type Message = {
  id: number;
  content: string;
  postedAt: string;
  postedBy: AuthorType;
  alignment: Alignment;
  read: boolean;
};

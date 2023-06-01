export type Alignment = 'start' | 'center' | 'end';

export type AuthorType = 'me' | 'them';

export type Message = {
  id: number;
  content: string;
  postedAt: string;
  postedBy: AuthorType;
  alignment: Alignment;
  read: boolean;
};

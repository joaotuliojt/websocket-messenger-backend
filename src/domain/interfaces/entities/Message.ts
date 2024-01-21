export interface Message {
  id: string;
  author: string;
  message: string;
  github: string;
  linkedin?: string;
  twitter?: string;
  createdAt: Date;
}

// tweet-card.types.ts

export type CommentType = {
  profilePicture: string;
  name: string;
  username: string;
  comment: string;
};

export type TweetType = {
  profilePicture: string;
  id: number;
  name: string;
  username: string;
  content: string;
  likedCount: number;
  comments: CommentType[];
};

export type ChatMessage = {
  sender: string;
  message: string;
  timestamp: string;
};

export type Chat = {
  id: number;
  name: string;
  profilePhoto: string;
  chats: ChatMessage[];
};


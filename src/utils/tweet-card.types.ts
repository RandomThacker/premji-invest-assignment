// tweet-card.types.ts

export type CommentType = {
  profilePicture: string;
  name: string;
  username: string;
  comment: string;
};

export type TweetType = {
  profilePicture: string;
  name: string;
  username: string;
  content: string;
  likedCount: number;
  comments: CommentType[];
};

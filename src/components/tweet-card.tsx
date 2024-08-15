import React, { useState } from 'react';
import Heart from '../assets/icons/heart.svg';
import RedHeart from '../assets/icons/red-heart.svg';
import CommentIcon from '../assets/icons/comment.svg';
import { TweetType } from '../utils/tweet-card.types';
import Comment from './comment';

type TweetCardProps = {
  tweet: TweetType;
};

const TweetCard: React.FC<TweetCardProps> = ({ tweet }) => {
  const { profilePicture, name, username, content, likedCount, comments } = tweet;
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likedCount);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount((prevCount: number) => (isLiked ? prevCount - 1 : prevCount + 1));
  };

  return (
    <div className="bg-[#1B1F23] flex flex-col gap-2 rounded-md p-4 w-[550px] mb-2">
      {/* Header */}
      <div className="flex gap-2 items-center">
        <img
          src={profilePicture}
          alt="profile-image"
          className="rounded-full h-10 w-10"
        />
        <div className="flex flex-col">
          <p className="text-sm font-medium text-zinc-200">{name}</p>
          <p className="text-xs font-normal text-[#999]">@{username}</p>
        </div>
      </div>

      {/* Content */}
      <p className="text-sm text-zinc-400">{content}</p>

      {/* Footer */}
      <div className="flex gap-4 mt-2">
        <div className="flex gap-1 items-center">
          <button onClick={handleLikeClick}>
            <img src={isLiked ? RedHeart : Heart} className="h-5 w-5" alt="heart" />
          </button>
          <p className="text-zinc-500 text-sm">{likeCount}</p>
        </div>
        <div className="flex gap-1 items-center">
          <button>
            <img src={CommentIcon} className="h-5 w-5" alt="comment" />
          </button>
          <p className="text-zinc-500 text-sm">{comments.length}</p>
        </div>
      </div>

      {/* Comment Section */}
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};

export default TweetCard;

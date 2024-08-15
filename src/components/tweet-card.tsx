import React, { useState } from "react";
import Heart from "../assets/icons/heart.svg";
import RedHeart from "../assets/icons/red-heart.svg";
import Comment from "../assets/icons/comment.svg";

type DataProp = {
  profilePicture: string;
  name: string;
  username: string;
  content: string;
  likedCount: number;
  commentCount: number;
};

const TweetCard: React.FC<DataProp> = ({
  profilePicture,
  name,
  username,
  content,
  likedCount,
  commentCount,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likedCount);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    // Update likeCount based on the current like state
    setLikeCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
  };

  return (
    <div className="bg-[#1B1F23] flex flex-col gap-2 rounded-md p-4 w-[550px] mb-2">
      <div className="flex gap-2 items-center">
        <img
          src={profilePicture}
          alt="profile-image"
          className="rounded-full h-10 w-10"
        />
        <div className="flex flex-col">
          <p className="text-sm font-medium text-zinc-200">{name}</p>
          <p className="text-xs font-normal text-[#999]">{username}</p>
        </div>
      </div>
      <p className="text-sm text-zinc-400">{content}</p>

      <div className="flex gap-4 mt-2">
        <div className="flex gap-1 items-center">
          <button onClick={handleLikeClick}>
            <img
              src={isLiked ? RedHeart : Heart}
              className="h-5 w-5"
              alt="heart"
            />
          </button>
          <p className="text-zinc-500 text-sm">{likeCount}</p>
        </div>
        <div className="flex gap-1 items-center">
          <button>
            <img src={Comment} className="h-5 w-5" alt="comment" />
          </button>
          <p className="text-zinc-500 text-sm">{commentCount}</p>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;

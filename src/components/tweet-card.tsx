import React, { useState } from "react";
import Heart from "../assets/icons/heart.svg";
import RedHeart from "../assets/icons/red-heart.svg";
import CommentIcon from "../assets/icons/comment.svg";
import { TweetType, CommentType } from "../utils/tweet-card.types";
import Comment from "./comment";
import userData from "../utils/user-data.json";

type TweetCardProps = {
  tweet: TweetType;
};

const TweetCard: React.FC<TweetCardProps> = ({ tweet }) => {
  const { profilePicture, name, username, content, likedCount, comments } =
    tweet;
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likedCount);
  const [newComment, setNewComment] = useState("");
  const [allComments, setAllComments] = useState<CommentType[]>(comments);
  const [showComments, setShowComments] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
  };
  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  const handleAddComment = () => {
    if (newComment.trim() === "") return; // Prevent empty comments

    const userProfilePicture = userData.profilePicture; // Replace with actual image URL
    const userName = userData.name;
    const userUsername = userData.username;

    const newCommentData: CommentType = {
      profilePicture: userProfilePicture,
      name: userName,
      username: userUsername,
      comment: newComment,
    };

    setAllComments((prevComments) => [...prevComments, newCommentData]);
    setNewComment(""); // Clear the input field after adding the comment
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
            <img
              src={isLiked ? RedHeart : Heart}
              className="h-5 w-5"
              alt="heart"
            />
          </button>
          <p className="text-zinc-500 text-sm">{likeCount}</p>
        </div>
        <div className="flex gap-1 items-center">
          <button onClick={handleShowComments}>
            <img src={CommentIcon} className="h-5 w-5" alt="comment" />
          </button>
          <p className="text-zinc-500 text-sm">{allComments.length}</p>
        </div>
      </div>

      {/* Comment Section */}
      <div className={`${showComments ? "block" : "hidden"}`}>
      <div className="border-t border-zinc-700 mb-3 mt-2" />

        {allComments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}

      {/* Input Field for Adding Comment */}
      <div className="flex items-center gap-2 mt-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="bg-[#2C2F33] text-white p-2 rounded-md w-full"
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-500 text-white px-2 py-1 rounded-md"
        >
          Post
        </button>
      </div>
      </div>

    </div>
  );
};

export default TweetCard;

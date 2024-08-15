import React from "react";
import Heart from "../../assets/icons/heart.svg";
import RedHeart from "../../assets/icons/red-heart.svg";
import CommentIcon from "../../assets/icons/comment.svg";
import { TweetType } from "../../utils/tweet-card.types";
import Comment from "./comment";
import UseTweetCard from "./use-tweet-card";

type TweetCardProps = {
  tweet: TweetType;
};

const TweetCard: React.FC<TweetCardProps> = ({ tweet }) => {
  const {
    id,
    setNewComment,
    handleAddComment,
    handleShowComments,
    handleLikeClick,
    likeCount,
    allComments,
    profilePicture,
    name,
    username,
    content,
    isLiked,
    showComments,
    newComment,
  } = UseTweetCard(tweet);

  return (
    <div key={id} className="bg-[#1B1F23] flex flex-col gap-2 rounded-md p-4 w-[550px] mb-2">
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
      {showComments && (
        <div>
          <div className="border-t border-zinc-700 mb-3 mt-2" />
          {allComments.length > 0 ? (
            allComments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))
          ) : (
            <p className="text-zinc-500 text-sm">No comments yet. Be the first to comment!</p>
          )}

          {/* Input Field for Adding Comment */}
          <div className="flex items-center gap-2 mt-4">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="bg-zinc-800 text-zinc-300 p-2 rounded-md w-full text-sm"
            />
            <button
              onClick={handleAddComment}
              className="text-white bg-blue-500 rounded-full px-3 py-1 text-sm font-medium"
            >
              Comment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TweetCard;

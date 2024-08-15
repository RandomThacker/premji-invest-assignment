import { useState } from "react";
import { CommentType, TweetType } from "../../utils/tweet-card.types";
import userData from "../../utils/user-data.json";

const UseTweetCard = (tweet: TweetType) => {
  const { id, profilePicture, name, username, content, likedCount, comments } = tweet;

  // Initialize state based on the tweet data
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

    const newCommentData: CommentType = {
      profilePicture: userData.profilePicture,
      name: userData.name,
      username: userData.username,
      comment: newComment,
    };

    setAllComments((prevComments) => [...prevComments, newCommentData]);
    setNewComment(""); // Clear the input field after adding the comment
  };

  return {
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
  };
};

export default UseTweetCard;

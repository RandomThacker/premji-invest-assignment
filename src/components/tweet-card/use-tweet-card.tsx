import { useState } from "react";
import { CommentType, TweetType } from "../../utils/tweet-card.types";
import userData from "../../utils/user-data.json";

const UseTweetCard = (tweet : TweetType) =>{
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

    const userProfilePicture = userData.profilePicture;
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

  return{setNewComment,setAllComments,handleAddComment,handleShowComments,handleLikeClick,likeCount,allComments,profilePicture, name, username, content,isLiked,showComments, newComment}

}

export default UseTweetCard
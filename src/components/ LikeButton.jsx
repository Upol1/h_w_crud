import React, { useContext } from "react";
import { PostContext } from "../ context/PostContext";
import "./LikeButton.css";
const LikeButton = ({ post }) => {
  const { updatePost } = useContext(PostContext);

  const toggleLike = () => {
    const updatedPost = { ...post, like: !post.like };
    updatePost(updatedPost);
  };

  return (
    <button
      onClick={toggleLike}
      className={`LikeButton ${post.like ? "liked" : ""}`}
    >
      {post.like ? "❤️" : "♡"}
    </button>
  );
};

export default LikeButton;

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../ context/PostContext";
import LikeButton from "./ LikeButton";

const PostDetail = () => {
  const { id } = useParams();
  const { posts } = useContext(PostContext);
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div>
      <h2>{post.author}</h2>
      <img src={post.image} alt={post.body} className="img-fluid" />
      <p>{post.body}</p>
      <LikeButton post={post} />
    </div>
  );
};

export default PostDetail;

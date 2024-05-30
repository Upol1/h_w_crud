import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PostContext } from "../ context/PostContext";

const EditPost = () => {
  const { id } = useParams();
  const { posts, updatePost } = useContext(PostContext);
  const navigate = useNavigate();

  const [post, setPost] = useState({
    body: "",
    author: "",
    image: "",
    like: false,
  });

  useEffect(() => {
    const existingPost = posts.find((post) => post.id === parseInt(id));
    if (existingPost) {
      setPost(existingPost);
    }
  }, [id, posts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost(post);
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Body</label>
          <textarea
            className="form-control"
            name="body"
            value={post.body}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            value={post.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={post.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditPost;

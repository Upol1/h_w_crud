import React, { useState, useContext } from "react";
import { PostContext } from "../ context/PostContext";

const AddPost = () => {
  const { addPost } = useContext(PostContext);
  const [post, setPost] = useState({
    body: "",
    author: "",
    image: "",
    like: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(post);
    setPost({
      body: "",
      author: "",
      image: "",
      like: false,
    });
  };

  return (
    <div>
      <h2>Add Post</h2>
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

export default AddPost;

import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { PostContext } from "../context/PostContext";
import axios from "axios";
const API_BASE_URL = "http://localhost:8001/todos";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const { setPosts } = useContext(PostContext);
  const [post, setPost] = useState({ body: "", author: "", image: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    a;
    const response = await axios.post("/api/posts", { ...post, like: false });
    setPosts((prevPosts) => [...prevPosts, response.data]);
    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Body</Form.Label>
        <Form.Control
          type="text"
          name="body"
          value={post.body}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          name="author"
          value={post.author}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          name="image"
          value={post.image}
          onChange={handleChange}
        />
      </Form.Group>
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default PostForm;

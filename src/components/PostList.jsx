import React, { useContext, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { PostContext } from "../ context/PostContext";
import axios from "axios";
import { Link } from "react-router-dom";
import LikeButton from "./ LikeButton";

const PostList = () => {
  const { posts, setPosts } = useContext(PostContext);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3001");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, [setPosts]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {Array.isArray(posts) &&
          posts.map((post) => (
            <div className="col-md-4" key={post.id}>
              <Card className="mb-4">
                <Card.Img variant="top" src={post.image} />
                <Card.Body>
                  <Card.Title>{post.author}</Card.Title>
                  <Card.Text>{post.body}</Card.Text>
                  <LikeButton postId={post.id} initialLike={post.like} />
                  <Link to={`/posts/${post.id}`} className="btn btn-primary">
                    View
                  </Link>
                  <Button variant="warning" className="ml-2">
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="ml-2"
                    onClick={() => handleDelete(post.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostList;

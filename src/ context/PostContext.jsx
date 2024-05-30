import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PostContext = createContext();

const BASE_URL = "http://localhost:8001/todos";

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let mounted = true;
    axios
      .get(BASE_URL)
      .then((response) => {
        if (mounted) {
          setPosts(response.data);
        }
      })
      .catch((error) => console.error("Error fetching posts:", error));

    return () => {
      mounted = false;
    };
  }, []);

  const addPost = (post) => {
    axios
      .post(BASE_URL, post)
      .then((response) =>
        setPosts((prevPosts) => [...prevPosts, response.data])
      )
      .catch((error) => console.error("Error adding post:", error));
  };

  const updatePost = (updatedPost) => {
    axios
      .put(`${BASE_URL}${updatedPost.id}`, updatedPost)
      .then((response) => {
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === updatedPost.id ? response.data : post
          )
        );
      })
      .catch((error) => console.error("Error updating post:", error));
  };

  const deletePost = (id) => {
    axios
      .delete(`${BASE_URL}${id}`)
      .then(() => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      })
      .catch((error) => console.error("Error deleting post:", error));
  };

  return (
    <PostContext.Provider
      value={{ posts, setPosts, addPost, updatePost, deletePost }}
    >
      {children}
    </PostContext.Provider>
  );
};

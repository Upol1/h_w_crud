import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/ Navbar";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import AddPost from "./components/AddPost";
import EditPost from "./components/Editpost";
import { PostProvider } from "./ context/PostContext";

function App() {
  return (
    <Router>
      <PostProvider>
        <div className="App">
          <NavBar />
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<PostList />} />
              <Route path="/posts/:id" element={<PostDetail />} />
              <Route path="/add" element={<AddPost />} />
              <Route path="/edit/:id" element={<EditPost />} />
            </Routes>
          </div>
        </div>
      </PostProvider>
    </Router>
  );
}

export default App;

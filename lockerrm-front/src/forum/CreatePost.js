import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import React from "react";
import authService from '../services/auth.service';

const CreatePost = () => {
  const [postContent, setPostContent] = useState("");
  const navigate = useNavigate();

  // Function submits POST request to API
  const handleSubmit = (e) => {
    e.preventDefault();

    const post = { user, postContent };
    // TODO: grab all user fields to send in request
    const user = null;

    const API = "http://localhost:8080/posts/create";
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer" + localStorage.getItem("access_token")
      },
      body: JSON.stringify(post)
    }

    fetch(API, options)
    .then(() => {
      navigate("/forum");
      console.log("Request was fullfilled.");
    })
    .catch((err) => {
      console.log(err);
    })
  };

  return (
    <div className="createPost">
      <h3>Create a New Post</h3>
      <form onSubmit={handleSubmit}>
        <label>Post:</label>
        <textarea
          required
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;

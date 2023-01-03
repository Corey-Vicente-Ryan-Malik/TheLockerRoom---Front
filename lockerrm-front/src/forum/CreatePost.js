import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from "react";
import authService from '../services/auth.service';

const CreatePost = () => {
  const [postBody, setPostBody] = useState("");

  const navigate = useNavigate();

  // Function submits POST request to API
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = authService.getCurrentUser();
    const post = { user, postBody };

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
    })
    .catch((err) => {
      console.log(err);
    })
  };


  return (
    <div className="createPost">
      <h3>Create a New Post</h3>
      <form>
        <label>Post:</label>
        <textarea
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        ></textarea>
        <button onClick={ handleSubmit }>Post</button>
      </form>
    </div>
  );
};

export default CreatePost;

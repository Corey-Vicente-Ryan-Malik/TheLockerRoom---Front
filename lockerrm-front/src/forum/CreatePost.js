import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from "react";
import authService from '../services/auth.service';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
      <Form style={{margin: "auto", width: '30%'}}>
        <Form.Group className="mb-2">
          <Form.Control
            as="textarea"
            rows={3}
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          ></Form.Control>
          <Form.Text className="text-muted">Express yourself in 500 words or less.</Form.Text>
        </Form.Group>
        <Button variant="primary" size="sm" onClick={ handleSubmit }>Post</Button>
      </Form>
    </div>
  );
};

export default CreatePost;

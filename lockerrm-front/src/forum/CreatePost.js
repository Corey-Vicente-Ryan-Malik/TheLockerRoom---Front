import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from "react";
import authService from '../services/auth.service';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/esm/Container';
import Alert from 'react-bootstrap/Alert';

const CreatePost = () => {
  const [postBody, setPostBody] = useState("");
  const [show, setShow] = useState(false);

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

  //
  if (show) {
    return (
      <Container style={{margin: "1rem auto 18rem"}}>
        <Alert variant="primary" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Rules for The Locker Room Forums</Alert.Heading>
          <ul>
            <li>No spamming</li>
            <li>No racism</li>
            <li>No solicitation</li>
            <li>Do not post sensitive information</li>
          </ul>
        </Alert>
      </Container>
    );
  }


  return (
    <div>
      <Container style={{display: 'flex', justifyContent: 'space-between'}}>
        <h2 style={{marginTop: "2rem", marginBottom: "0"}}>Create Your Own Post</h2>
        <Button style={{marginTop: "2rem"}} variant="dark" onClick={() => {setShow(true)}}>Read the rules</Button>
      </Container>
      <Container>
        <hr style={{margin: "1rem auto 3rem"}} />
      </Container>
      <Container style={{margin: "1rem auto 10rem"}} className="text-center">
        <Form>
          <Form.Group className="mb-2">
            <Form.Control
              as="textarea"
              rows={4}
              required
              value={postBody}
              onChange={(e) => setPostBody(e.target.value)}
            ></Form.Control>
            <Form.Text className="text-muted">Express yourself in 500 words or less.</Form.Text>
          </Form.Group>
          <Button variant="primary" onClick={ handleSubmit }>Post</Button>
        </Form>
      </Container>
    </div>
  );
};

export default CreatePost;

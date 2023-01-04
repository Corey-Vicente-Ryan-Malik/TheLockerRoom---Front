import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import "./Forum.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";


const Forum = () => {
  const [posts, setPosts] = useState([]);
  const currentUser = authService.getCurrentUser();
  const navigate = useNavigate();

  const API = "https://lockerrm.us:8080/posts";
  const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("access_token")
    },
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    fetch(API, options)
    .then((response) => response.json())
    .then((data) => {
      setPosts(data);
    });
  }
  
  return (
    <div>
      <h2 className="forumWelcome">The Locker Room Forums</h2>

      <Button style={{marginLeft: '19rem', marginBottom: '1rem'}} variant="dark" onClick={() => navigate('/create-post')}>Create Post</Button>

      <Container>
        <Alert variant="success">
          <Alert.Heading>Hey, {currentUser.username}!</Alert.Heading>
          <p>
            Welcome to The Locker Rooms Forums page, and thank you for joining us. Here in the forums, feel free to look around and see what other people have to say about the latest
            NFL games and news going on today!
          </p>
          <hr />
          <p className="mb-0">
            Have any questions or concerns? Contact us at lockerrm@gmail.com
          </p>
        </Alert>
        <Row>
          {posts.map((post) => (
            <Col>
              <Card style={{
                width: '20rem',
                padding: '1rem',
                marginBottom: '1rem',
                }} key={post.id}>
                  <Card.Subtitle className="text-muted">Created by @{post.user.username}</Card.Subtitle>
                  <Card.Text>{post.postBody}</Card.Text>

                  <Button style={{width: '30%'}} variant="outline-success" size="sm" onClick={() => {
                    // If logged in user username === posts username
                    // Send user to edit post form
                    if (currentUser["username"] === post.user.username) {
                      navigate("/edit-post" + "/" + post.id);
                    } else {
                      alert("You are not the owner of the post.");
                    }
                  }}>Edit</Button>

                  <Button style={{width: '30%', }} variant="outline-danger" size="sm" onClick={() => {
                    // If logged in user username === posts username
                    // Allow user to delete post
                    if (currentUser["username"] === post.user.username) {
                      const DELETE_POST_API = "http://localhost:8080/posts/" + post.id + "/delete";
                      const requestOptions = {
                        method: "DELETE",
                        headers: {
                          "Content-Type": "application/json",
                          "Authorization": "Bearer" + localStorage.getItem("access_token")
                        }
                      }
                      fetch(DELETE_POST_API, requestOptions)
                      .then(window.location.reload(true));
                    } else {
                      alert("You are not the owner of this post.");
                    }
                  }}>Delete</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

    </div>

  );
};

export default Forum;

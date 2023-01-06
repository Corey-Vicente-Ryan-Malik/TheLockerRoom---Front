import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/auth.service';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Forum.css';

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const currentUser = authService.getCurrentUser();
  const navigate = useNavigate();

  const API = 'http://localhost:8080/posts';
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    },
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    fetch(API, options)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  };

  const customToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <span className="threeDots" />
    </a>
  ));

  return (
    <div style={{ backgroundColor: 'e5e4e2' }}>
      <h2 className="forumWelcome">The Locker Room Forums</h2>

      <Container>
        <Alert variant="success">
          <Alert.Heading>Hey, {currentUser.username}!</Alert.Heading>
          <p>
            Welcome to The Locker Rooms Forums page, and thank you for joining
            us. Here in the forums, feel free to look around and see what other
            people have to say about the latest NFL games and news going on
            today!
          </p>
          <hr />
          <p className="mb-0">
            Have any questions or concerns? Contact us at lockerrm@gmail.com
          </p>
        </Alert>

        <Button
          style={{ marginBottom: '1rem' }}
          variant="dark"
          onClick={() => navigate('/create-post')}
        >
          Create Post
        </Button>

        {posts.map((post) => (
          <Card
            style={{
              width: '80%',
              padding: '1.5rem',
              marginBottom: '1rem',
            }}
            key={post.id}
          >
            <Card.Subtitle className="text-muted">
              Posted by {post.user.username}
              <Dropdown>
                <Dropdown.Toggle as={customToggle} />
                <Dropdown.Menu size="sm" title="">
                  <Dropdown.Item
                    onClick={() => {
                      // If logged in user username === posts username
                      // Send user to edit post form
                      if (currentUser['username'] === post.user.username) {
                        navigate('/edit-post' + '/' + post.id);
                      } else {
                        alert('You are not the owner of the post.');
                      }
                    }}
                  >
                    Edit
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      // If logged in user username === posts username
                      // Allow user to delete post
                      if (currentUser['username'] === post.user.username) {
                        const DELETE_POST_API =
                          'http://localhost:8080/posts/' + post.id + '/delete';
                        const requestOptions = {
                          method: 'DELETE',
                          headers: {
                            'Content-Type': 'application/json',
                            Authorization:
                              'Bearer' + localStorage.getItem('access_token'),
                          },
                        };
                        fetch(DELETE_POST_API, requestOptions).then(
                          window.location.reload(true)
                        );
                      } else {
                        alert('You are not the owner of this post.');
                      }
                    }}
                  >
                    Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Subtitle>
            <Card.Text style={{ marginBottom: '0px' }}>
              {post.postBody}
            </Card.Text>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Forum;

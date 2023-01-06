import { React, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import authService from '../services/auth.service';
import './Forum.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

const EditPost = () => {
  const navigate = useNavigate();
  const [postBody, setPostBody] = useState('');
  const [currentPost, setCurrentPost] = useState('');
  const { id } = useParams();

  const getCurrentPost = 'http://localhost:8080/posts/' + id;
  const getPostOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    },
  };

  // Sending GET request to retrieve current post being edited.
  fetch(getCurrentPost, getPostOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let postInfo = data.postBody;
      setCurrentPost(postInfo);
    })
    .catch((err) => console.log(err));

  // Function sends PUT request to edit post.
  const onSubmit = (e) => {
    e.preventDefault();

    const user = authService.getCurrentUser();
    const post = { user, postBody };

    const EDIT_API = 'http://localhost:8080/posts/' + id + '/edit-post';
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      },
      body: JSON.stringify(post),
    };

    fetch(EDIT_API, options)
      .then(() => {
        navigate('/forum');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="editPost">
      <h3>Edit Your Post</h3>
      <Container>
        <Form style={{ margin: 'auto' }} onSubmit={onSubmit}>
          <Form.Control
            as="textarea"
            rows={3}
            className="mb-3"
            required
            defaultValue={currentPost}
            onChange={(e) => setPostBody(e.target.value)}
          ></Form.Control>
          <Button variant="success" type="submit">
            Edit Post
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default EditPost;

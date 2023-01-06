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

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/forum');
  };

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
        <Container style={{display: 'flex', justifyContent: 'space-between'}}>
            <h2 style={{marginTop: "2rem", marginBottom: "0"}}>Edit Your Post</h2>
        </Container>
        <hr style={{width: "90%", margin: "1rem auto 3rem"}} />
        <Container style={{margin: "1rem auto 10rem"}} className="text-center">
            <Form style={{ margin: 'auto' }} onSubmit={onSubmit}>
                <Form.Control
                as="textarea"
                rows={4}
                className="mb-3"
                required
                defaultValue={currentPost}
                onChange={(e) => setPostBody(e.target.value)}
                ></Form.Control>
                <Form.Text style={{display: "block", margin: "1rem auto 1rem"}} className="text-muted">Express yourself in 500 words or less, again.</Form.Text>
                <Button variant="success" type="submit">
                Edit Post
                </Button>
                <Button
                variant="danger"
                className="mx-2"
                type="button"
                onClick={handleCancel}
                >
                Cancel
                </Button>
            </Form>
        </Container>
    </div>
  );
};
export default EditPost;
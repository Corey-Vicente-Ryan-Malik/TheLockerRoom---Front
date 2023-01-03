import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/auth.service';


const Forum = () => {
  const [posts, setPosts] = useState([]);
  const currentUser = authService.getCurrentUser();
  const navigate = useNavigate();

  const API = "http://localhost:8080/posts";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer" + localStorage.getItem("access_token")
    }
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    fetch(API, options)
    .then(response => response.json())
    .then(data => setPosts(data));
  }


  return (
    <div>
      <h2>Welcome to The Locker Room's Forum</h2>

      <button onClick={() => navigate('/create-post')}>Create Post</button>

      <div className="allPosts">
        {posts.map((post) => (
          <div key={post.id}>
              <small>Created by @{post.user.username}</small>
              <p>{post.postBody}</p>

              <button onClick={() => {
                // If logged in user username === posts username
                // Send user to edit post form
                if (user.username === post.user.username) {
                  navigate("/edit-post")
                } else {
                  alert("You are not the owner of the post.");
                }
              }}>Edit</button>

              <button onClick={() => {
                // If logged in user username === posts username
                // Allow user to delete post
                if (user.username === post.user.username) {
                  const DELETE_POST_API = "http://localhost:8080/posts/" + post.id + "/delete";
                  const requestOptions = {
                    method: "DELETE",
                    headers: {
                      "Content-Type": "application/json",
                      "Authorization": "Bearer" + localStorage.getItem("access_token")
                    }
                  }
                  fetch(DELETE_POST_API, requestOptions)
                  .then(console.log("Post successfully deleted."));
                } else {
                  alert("You are not the owner of this post.");
                }
              }}>Delete</button>
          </div>
        ))}

      </div>

      </div>

  );
};

export default Forum;

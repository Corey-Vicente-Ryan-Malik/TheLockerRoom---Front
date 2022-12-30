import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from "../../services/auth.service";

const Forum = () => {
  
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const API = "http://localhost:8080/posts";
  const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("access_token")
      },
    }
  
  // useEffect runs on initial page load and everytime the data changes
  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    let allPosts = [];

    fetch(API, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      allPosts.push(data);
    });

    setPosts(allPosts);
  }

  console.log(posts);
  
  // Create function for edit button


  // Create function to delete post.
  

  return (
    <div>

      <h2>Welcome to The Locker Room's Forum</h2>
      

      <button onClick={() => navigate("/create-post")}>Create Post</button>
      <br />
      <br />
      <select>
        <option disabled>Select One</option>
        <option value="all-posts">All Posts</option>
      </select>

      <div className="allPosts">
        {/* Display all posts here */}
        {posts.map((post) => (
          <div key={post.id}>
              <small>Created by @{post.user.username}</small>
              <p>{post.postBody}</p>
              <button>Edit</button>
              <button>Delete</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Forum;
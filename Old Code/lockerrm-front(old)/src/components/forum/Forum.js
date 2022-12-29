import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Forum = () => {

  const API = "http://localhost:8080/posts";
  const user = JSON.parse(localStorage.getItem("user"));
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  
  // useEffect runs on initial page load and everytime the data changes
  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    let allPosts = [];
    const response = fetch(API);
    const data = (await response).json();
    allPosts.push(data);
    console.log(data);
    setPosts(allPosts);
  }

  console.log(posts);
  

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

      {/* <div className="allPosts">
        {posts.map((post) => (
          <div key={post.id}>
              <small>Created by @{post.user.username}</small>
              <p>{post.postBody}</p>
          </div>
        ))}
      </div> */}

    </div>
  );
}

export default Forum;
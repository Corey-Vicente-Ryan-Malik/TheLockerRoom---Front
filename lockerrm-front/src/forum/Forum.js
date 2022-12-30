import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Forum = () => {
<<<<<<< HEAD:lockerrm-front/src/components/forum/Forum.js
  
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
  
=======
  const API = 'http://localhost:8080/posts';
  const user = JSON.parse(localStorage.getItem('user'));
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

>>>>>>> 6e2d66d9ecff10b7dbf2b328dfc4d1cf7b6293ef:lockerrm-front/src/forum/Forum.js
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
  };

  console.log(posts);
<<<<<<< HEAD:lockerrm-front/src/components/forum/Forum.js
  
  // Create function for edit button


  // Create function to delete post.
  
=======
>>>>>>> 6e2d66d9ecff10b7dbf2b328dfc4d1cf7b6293ef:lockerrm-front/src/forum/Forum.js

  return (
    <div>
      <h2>Welcome to The Locker Room's Forum</h2>

      <button onClick={() => navigate('/create-post')}>Create Post</button>
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
<<<<<<< HEAD:lockerrm-front/src/components/forum/Forum.js
      </div>

=======
      </div> */}
>>>>>>> 6e2d66d9ecff10b7dbf2b328dfc4d1cf7b6293ef:lockerrm-front/src/forum/Forum.js
    </div>
  );
};

export default Forum;

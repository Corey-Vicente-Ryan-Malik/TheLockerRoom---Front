import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css';
import React from "react";

const CreatePost = () => {
    const [postContent, setPostContent] = useState('');
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const post = { user, postContent };
        const API = 'http://localhost:8080/posts/create';


        fetch(API, {
            method: 'POST',
            credentials: 'include',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
        })
        // Getting 401 error (unauthorized)
        // Currently not grabbing logged in user
        // I need to grab current logged in user
        // Send both the user, and the post being created in request
        // Currently only sending post, without valid user credentials
        .then(() => { console.log('POST request fulfilled.'); })
        .catch((err) => { console.log(err) });
        
        navigate("/forum");
    }

    return(
        <div className="createPost">
            <h3>Create a New Post</h3>
            <form onSubmit={ handleSubmit }>
                <label>Post:</label>
                <textarea required value={ postContent } onChange={(e) => setPostContent(e.target.value)}></textarea>
                <button type='submit'>Post</button>
            </form>
        </div>
    )
}

export default CreatePost;
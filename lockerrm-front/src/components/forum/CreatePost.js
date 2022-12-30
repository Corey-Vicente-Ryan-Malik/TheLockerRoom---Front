import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css';
import React from "react";

const CreatePost = () => {
    const [postContent, setPostContent] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const post = { user, postContent };
        const API = "http://localhost:8080/posts/create";


        fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer" + localStorage.getItem("access_token")
                
            },
            body: JSON.stringify(post)
        })
        .then(() => { console.log('POST request fulfilled.'); })
        .catch((err) => { console.log(err) });
        
        console.log(post);
        // navigate("/forum");
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
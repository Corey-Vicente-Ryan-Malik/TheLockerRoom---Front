import { React, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import authService from '../services/auth.service';
import './Forum.css';

const EditPost = () => {
    const navigate = useNavigate();
    const [postBody, setPostBody] = useState("");
    const { id } = useParams();
    
    
    const onSubmit = (e) => {
        e.preventDefault();
        
        const user = authService.getCurrentUser();
        const post = { user, postBody }

        const EDIT_API = "http://localhost:8080/posts/" + id + "/edit-post";
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token")
            },
            body: JSON.stringify(post)
        }

        fetch(EDIT_API, options)
        .then(() => { navigate("/forum") })
        .catch((err) => { console.log(err) })
    }
    

    return(
        <div className="createPost">
            <h3>Edit Your Post</h3>
            <form onSubmit={onSubmit}>
                <label>Post:</label>
                <textarea 
                required
                value={ postBody }
                onChange={(e) => setPostBody(e.target.value)}
                ></textarea>
                <button type="submit">Edit Post</button>
            </form>
        </div>
    )
}

export default EditPost;
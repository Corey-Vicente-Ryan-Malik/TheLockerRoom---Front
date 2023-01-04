import { React, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import authService from '../services/auth.service';
import './Forum.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditPost = () => {
    const navigate = useNavigate();
    const [postBody, setPostBody] = useState("");
    const { id } = useParams();
    
    
    const onSubmit = (e) => {
        e.preventDefault();
        
        const user = authService.getCurrentUser();
        const post = { user, postBody }

        const EDIT_API = "https://lockerrm.us:8080/posts/" + id + "/edit-post";
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
        <div className="editPost">
            <h3>Edit Your Post</h3>
            <Form style={{margin: "auto", width: "30%"}} onSubmit={onSubmit}>
                <Form.Control
                as="textarea"
                rows={3}
                className="mb-3"
                required
                value={ postBody }
                onChange={(e) => setPostBody(e.target.value)}
                ></Form.Control>
                <Button variant="success" type="submit">Edit Post</Button>
            </Form>
        </div>
    )
}

export default EditPost;
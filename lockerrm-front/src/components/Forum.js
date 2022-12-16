import axios from "axios";
import React from "react";


export default class Forum extends React.Component {

    constructor(props) {
        super(props);

        // Declaring post state variable
        this.state = {
            posts: []
        }
    }

    // componentDidMount method is called as soon as the component is mounted and ready
    componentDidMount() {
        const POSTS_API_URL = "http://localhost:8080/posts";

        // Send GET request to backend for all posts
        axios.get(POSTS_API_URL)
        .then((data) => {
            this.setState({ posts: data });
            console.log(this.state.data);
        })
        .catch((error) => {
            console.log(`GET response parsing failed.\n${error}`);
        });
    }

    render() {
        return (
            <div>
                <h2 className="postsHeader">All Posts</h2>
                {
                    // Looping over posts list and creating views for each post.
                    this.state.posts.map((post) => {
                        <div key={post.id}>
                            <h6>{post.id}</h6>
                            <h6>{post.userId}</h6>
                            <p>{post.body}</p>
                        </div>
                    }
                    )
                }
            </div>
        )
    }
}

// const Forum = () => {

//     // Posts endpoint for REST API
//     const POSTS_API_URL = "http://localhost:8080/posts";

//     useEffect(() => {
//         axios.get(POSTS_API_URL)
//         .then((response) => {console.log(response.data)})
//         .catch((error) => {console.log(error)});
//     }, []);

//     return (
//         <div className="Forum">
//             <h1>This is the [ Forum page]</h1>
//         </div>
//     );
// }
//
// export default Forum;
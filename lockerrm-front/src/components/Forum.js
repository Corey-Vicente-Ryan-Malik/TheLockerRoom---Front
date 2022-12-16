import React from "react";
import Post from "./Post"

export default class Forum extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
        
        this.getAllPosts = this.getAllPosts.bind(this);
    }

    async getAllPosts() {
        const POSTS_API_URL = "http://localhost:8080/posts";
        const response = fetch(POSTS_API_URL);
        const data = (await response).json();
        console.log(data);
        return data;
    }

    // componentDidMount method is called as soon as the component is mounted and ready, i.e rendered
    async componentDidMount() {
        const posts = await this.getAllPosts();
        
        // Setting values of p
        this.setState({ posts });
    }


    render() {
        // Logging posts for sanity check
        console.log(this.state.posts);

        return (
          <React.Fragment>
            {this.state.posts.map((post) => (
            //   <Post
            //     key={post.id}
            //     postbody={post.postBody}
            //     username={post.user.username}
            //   />
            <div key={post.id}>
                <p>{post.postBody}</p>
                <small>{post.user.username}</small>
            </div>

            ))}
          </React.Fragment>
        );
      }
    }
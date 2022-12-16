import React from "react";

const Post = ({username, postbody}) => {
    <React.Fragment>
        <h6>@{username}</h6>
        <p>{postbody}</p>
    </React.Fragment>
}

export default Post;
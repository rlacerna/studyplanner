import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const divStyle = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };

  return (
    <div style={divStyle}>
      <Link to={`/post/${post.id}`}>
        <h1>{post.course}</h1>
      </Link>
      <h2>{post.details}</h2>
    </div>
  );
};

export default Post;

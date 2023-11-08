import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {

  const div = {
    textAlign: "center",
    border: "1px solid #d4d4d4",
    borderRadius: "8px",
    width: "80%",
    margin: "30px auto",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    background: "#fff",
  };

  return (
    <div style={div}>
      <Link to={`/planner/${post.id}`}>
        <h1>{post.course}</h1>
      </Link>
      <h2>{post.goals}</h2>
      <h2>{post.details}</h2>
    </div>
  );
};

export default Post;

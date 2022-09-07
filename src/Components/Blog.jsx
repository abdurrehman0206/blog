import React from "react";
import { Link } from "react-router-dom";
function Blog(props) {
  const { id, title, author } = props.blog;
  return (
    <div className="blog">
      <Link to={`/blogs/${id}`}>
        <h1>{title}</h1>
        <h4>-{author}</h4>
      </Link>
    </div>
  );
}

export default Blog;

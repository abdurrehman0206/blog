import React from "react";
import useFetch from "./useFetch";
import Blog from "./Blog";
import Loader from "./Loader";
function BlogList() {
  const url = "https://631655b282797be77fe38cfa.mockapi.io/blogs";
  const { data, error, isPending } = useFetch(url);
  const blogElements = data.map((blog) => {
    return <Blog key={blog.id} blog={blog} isPending={isPending} url={url} />;
  });
  return (
    <div className="blogs--container">
      {!isPending ? blogElements : <Loader />}
      {error && <p className="error--message">{error}</p>}
    </div>
  );
}

export default BlogList;

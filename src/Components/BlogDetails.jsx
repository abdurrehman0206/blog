import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import Loader from "./Loader";
function BlogDetails() {
  const [deleteError, setDeleteError] = useState(null);

  const nav = useNavigate();
  const { id } = useParams();
  const url = "https://631655b282797be77fe38cfa.mockapi.io/blogs/" + id;
  const { data, error, isPending } = useFetch(url);
  const HandleDelete = () => {
    const abort = new AbortController();
    fetch(url, { signal: abort.signal, method: "DELETE" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Error fetching data");
        }
      })
      .then(() => {
        nav("/blogs");
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
        } else {
          setDeleteError(err.message);
        }
      });
    return () => abort.abort();
  };

  const BlogElement = (
    <div className="blog">
      <h1>{data.title}</h1>
      <h4>-{data.author}</h4>
      <p>{data.content}</p>
      <button className="delete--btn" onClick={HandleDelete}>
        Delete
      </button>
      {error && <p className="error--message">{error}</p>}
      {deleteError && <p className="error--message">{deleteError}</p>}
    </div>
  );

  return <>{isPending ? <Loader /> : BlogElement}</>;
}

export default BlogDetails;

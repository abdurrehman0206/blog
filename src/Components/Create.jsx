import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
function Create() {
  const nav = useNavigate();
  const url = "https://631655b282797be77fe38cfa.mockapi.io/blogs";
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [enable, setEnable] = useState(false);
  const [start, setStart] = useState(false);
  const [isPosted, setPosted] = useState(false);
  const [error, setError] = useState(null);
  const initialState = () => {
    setTitle("");
    setAuthor("");
    setContent("");
    setEnable(false);
    setStart(false);
    setPosted(false);
    setError(null);
  };
  useEffect(() => {
    if (title === "" || author === "" || content === "") {
      setEnable(false);
    } else {
      setEnable(true);
    }
    return () => {};
  }, [title, author, content]);

  const postBlog = () => {
    const blog = { title, author, content };
    const abort = new AbortController();
    fetch(url, {
      signal: abort.signal,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Post Failed");
        }
      })
      .then(() => {
        setPosted(true);
        initialState();
        nav("/blogs");
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Post Aborted By User");
        } else {
          setError(err.message);
          setPosted(true);
        }
      });
    return () => abort.abort();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postBlog();
    setStart(true);
    setError(null);
    setPosted(false);
  };
  return (
    <div className="post--container">
      <form className="blog--form" onSubmit={handleSubmit}>
        <section className="col">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </section>
        <section className="col">
          <label htmlFor="body">Body</label>
          <textarea
            rows="7"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </section>
        <section className="col">
          <label htmlFor="author">Author</label>
          <input
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </section>
        <div className="interect--container center-flexed">
          {enable && !start && <button>Add Blog</button>}
          {start && !isPosted && !error && <Loader />}
          {error && <p className="error--message">{error}</p>}
        </div>
      </form>
    </div>
  );
}

export default Create;

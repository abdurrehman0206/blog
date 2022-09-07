import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function useDelete(url) {
  const [error, setError] = useState(null);
  const [isPending, setPending] = useState(true);
  const nav = useNavigate();
  
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
        setError(err.message);
        setPending(false);
      }
    });
  return () => abort.abort();
}

export default useDelete;

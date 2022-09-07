import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setPending] = useState(true);
  // const { url } = props;
  useEffect(() => {
    const abort = new AbortController();
    fetch(url, { signal: abort.signal })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Error fetching data");
        }
      })
      .then((data) => {
        setData(data);
        setPending(false);
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
  }, [url]);
  return { data, error, isPending };
}

export default useFetch;

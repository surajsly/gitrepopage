import React, { useState, useEffect } from "react";
import { fetchIssue } from "./api";

function Showissue() {
  const [issue, setissue] = useState(null);

  useEffect(async () => {
    const data = await fetchIssue();
    setissue(data);
    console.log(issue);
  }, []);

  return (
    <div>
      <h1>{issue?.title}</h1>
      <p>{issue?.body}</p>
    </div>
  );
}

export default Showissue;

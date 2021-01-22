import React, { useState, useEffect } from "react";
import { fetchIssue } from "./api";
import ReactMarkdown from "react-markdown";
import { useLocation, useParams } from "react-router-dom";

function Showissue() {
  const [issue, setissue] = useState(null);
  let { id } = useParams();

  useEffect(async () => {
    const data = await fetchIssue(id);
    setissue(data);
    console.log(issue);
    console.log(id);
  }, []);

  return (
    <div>
      <h1>{issue?.title}</h1>
      <ReactMarkdown source={issue?.body} />
    </div>
  );
}

export default Showissue;

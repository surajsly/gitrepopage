import React, { useEffect, useState } from "react";
import { fetchIssueList } from "./api";
import Showissue from "./Showissue";
import { Link } from "react-router-dom";

function GithubIssueList() {
  const [items, setitems] = useState(null);

  useEffect(async () => {
    const data = await fetchIssueList();
    setitems(data.items);
    console.log(items);
  }, []);

  if (!items) {
    return <h1>LOADING...</h1>;
  }
  return (
    <div>
      <div>
        {items.map((item) => (
          <p>
            <Link to={`/issue/${item?.number}`}>{item?.title}</Link>
          </p>
        ))}
      </div>
    </div>
  );
}

export default GithubIssueList;

import React, { useEffect, useState } from "react";
import { fetchIssueList } from "./api";

function GithubIssueList() {
  const [items, setitems] = useState(null);

  useEffect(async () => {
    const data = await fetchIssueList();
    setitems(data.items);
    console.log(items);
  }, []);

  if (!items) {
    return <h1>a</h1>;
  }
  return (
    <div>
      <div>
        {items.map((item) => (
          <p>
            <a href={item?.url}>{item?.title}</a>
          </p>
        ))}
      </div>
    </div>
  );
}

export default GithubIssueList;

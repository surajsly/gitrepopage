import React, { useEffect, useState } from "react";
import { fetchIssueList } from "./api";
import Showissue from "./Showissue";
import { Link } from "react-router-dom";
import { shorten } from "./utils";
import IssueLabels from "./IssueLabels.js";

import "./GitIssueList.css";

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
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-11">
          {items.map((item) => (
            <div className="issue">
              <div className="issue__body">
                <Link to={`/issue/${item?.number}`}>
                  <span className="issue__number">#{item?.number}</span>
                  <span className="issue__title">{item?.title}</span>
                </Link>
                <p className="issue__summary">{shorten(item?.body)}</p>
                <IssueLabels labels={item?.labels} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GithubIssueList;

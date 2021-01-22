import React, { useState, useEffect } from "react";
import { fetchIssue } from "./api";
import ReactMarkdown from "react-markdown";
import { useLocation, useParams } from "react-router-dom";
import IssueLabels from "./IssueLabels";

import "./Showissue.css";

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
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <p class="card-header">
              <span class="user__name">
                <a href={issue?.user.html_url}>
                  <strong>@{issue?.user.login}</strong>
                </a>
              </span>
              <IssueLabels labels={issue?.labels} />
            </p>
            <div class="card-body">
              <h5 class="card-title ">{issue?.title}</h5>
              <p class="card-text issue__heading">
                <ReactMarkdown source={issue?.body} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showissue;

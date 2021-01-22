import React, { useEffect, useState } from "react";
import { fetchIssueList } from "./api";
import Showissue from "./Showissue";
import { Link } from "react-router-dom";
import { shorten } from "./utils";
import IssueLabels from "./IssueLabels.js";

import "./GitIssueList.css";

function GithubIssueList() {
  const [items, setitems] = useState(null);
  const [page, setpage] = useState(1);
  const [search, setsearch] = useState("node");

  useEffect(async () => {
    const data = await fetchIssueList(search, page);
    setitems(data.items);
    console.log(items);
  }, []);

  const handleNextClick = async () => {
    setpage(page + 1);
    const data = await fetchIssueList(search, page);
    setitems(data.items);
    console.log(items);
  };

  const handlesearchClick = async (e) => {
    e.preventDefault();
    setsearch(e.target.search.value);
    const data = await fetchIssueList(search, 1);
    setitems(data.items);
    console.log(items);
  };

  const handleprevClick = async () => {
    if (page > 1) {
      setpage(page - 1);
      const data = await fetchIssueList(search, page);
      setitems(data.items);
      console.log(items);
    }
  };

  if (!items) {
    return <h1>LOADING...</h1>;
  }
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-11 mt-2">
          <form onSubmit={handlesearchClick} class=" input-group mb-3 ">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              id="search"
              name="search"
              class="form-control"
            />
            <button
              type="submit"
              value="send"
              class="btn btn-outline-secondary"
              id="button-addon2"
            >
              Search
            </button>
          </form>
        </div>
        <div class="col-md-11">
          {items.map((item) => (
            <div key={item?.id} className="issue">
              <div className="issue__body">
                <Link to={`/issue/${item?.number}`}>
                  <svg
                    height="25"
                    class="octicon octicon-issue-opened"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="25"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"
                    ></path>
                  </svg>
                  <span className="issue__number">#{item?.number}</span>
                  <span className="issue__title">{shorten(item?.title)}</span>
                </Link>
                <p className="issue_meta">
                  opened at {item?.created_at} By{" "}
                  <a
                    href={item?.user.html_url}
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    @{item?.user.login}
                  </a>
                </p>
                <IssueLabels labels={item?.labels} />
              </div>
            </div>
          ))}

          <div class="bottom__button">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={handleprevClick}
            >
              &laquo; Previous
            </button>
            <button
              type="button"
              class="btn btn-success"
              onClick={handleNextClick}
            >
              Next &raquo;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GithubIssueList;

import "./App.css";
import { useState, useEffect } from "react";

import { fetchBaseInfo, fetchIssueList } from "./components/api";
import GithubIssueList from "./components/GithubIssueList";
import Showissue from "./components/Showissue";

import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

function App() {
  const [baseUrl, setbaseUrl] = useState(
    "https://api.github.com/repos/angular/angular"
  );
  const [RepInfo, setRepInfo] = useState(null);

  useEffect(async () => {
    const data = await fetchBaseInfo(baseUrl);
    fetchIssueList();
    setRepInfo(data);
  }, []);

  return (
    <div className="App">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-11">
            <header className="App-header">
              <p className="repo__name">
                <a href={RepInfo?.html_url}>
                  <strong>{RepInfo?.full_name}</strong>
                </a>
              </p>
              <p class="repo__info">
                <span>
                  <strong>Open Issue</strong> {RepInfo?.open_issues}
                </span>
                <span>
                  <strong>Watch</strong> {RepInfo?.watchers_count}
                </span>
                <span>
                  <strong>Fork</strong> {RepInfo?.forks_count}
                </span>
              </p>
            </header>
          </div>
        </div>
      </div>{" "}
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={GithubIssueList} />
          <Route path="/issue/:id" exact component={Showissue} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-11">
            <header className="App-header">
              <p className="repo__name">
                <a href={RepInfo?.html_url}>
                  <strong>{RepInfo?.full_name}</strong>
                </a>
              </p>
              <div class="container-fluid">
                <p className="row repo__info">
                  <span className="col-md-2 col-xs-12">
                    <strong>Open Issue</strong> {RepInfo?.open_issues}
                  </span>
                  <span className="col-md-2 col-xs-12">
                    <strong>Watch</strong> {RepInfo?.watchers_count}
                  </span>
                  <span className="col-md-2 col-xs-12">
                    <strong>Fork</strong> {RepInfo?.forks_count}
                  </span>
                </p>
              </div>
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

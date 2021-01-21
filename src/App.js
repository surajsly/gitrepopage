import "./App.css";
import { useState, useEffect } from "react";
import { fetchBaseInfo, fetchIssueList } from "./components/api";
import GithubIssueList from "./components/GithubIssueList";

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
      <header className="App-header">
        <h1>github issue page assignemet</h1>
        <h2>{RepInfo?.full_name}</h2>
        <h5>Open Issue{RepInfo?.open_issues}</h5>
      </header>
      <GithubIssueList />
    </div>
  );
}

export default App;

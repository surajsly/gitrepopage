import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [baseUrl, setbaseUrl] = useState(
    "https://api.github.com/repos/angular/angular"
  );
  const [RepInfo, setRepInfo] = useState(null);

  useEffect(async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(data);
    setRepInfo(data);
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>github issue page assignemet</h1>
        <h2>{RepInfo?.full_name}</h2>
        <h5>Open Issue{RepInfo?.open_issues}</h5>
      </header>
    </div>
  );
}

export default App;

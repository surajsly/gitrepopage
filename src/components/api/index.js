export const fetchBaseInfo = async (baseUrl) => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  console.log(data);
  return data;
};

export const fetchIssueList = async () => {
  const response = await fetch(
    "https://api.github.com/search/issues?q=repo:angular/angular/node+type:issue+state:open&per_page=10&page=1"
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export const fetchIssue = async (id) => {
  const response = await fetch(
    `https://api.github.com/repos/angular/angular/issues/${id}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

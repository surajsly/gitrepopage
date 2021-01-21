export const fetchBaseInfo = async (baseUrl) => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  console.log(data);
  return data;
};

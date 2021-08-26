const baseUrl = "http://localhost:4000/api";

export const fetchApi = async (url) => {
  const resp = await fetch(`${baseUrl}${url}`);
  return await resp.json();
};

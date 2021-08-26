const baseUrl = "http://localhost:4000/api";

//esta funcion se encarga de realizar los llamados a la API.
export const fetchApi = async (url) => {
  const resp = await fetch(`${baseUrl}${url}`);
  return await resp.json();
};

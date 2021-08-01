import axios from "axios";

// first create a custom axios request
const customAxios = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  timeout: 10000,
});

// Add the token to the request
const reqHandler = (req) => {
  const token = localStorage.getItem("token");

  req.headers.Authorization = token || "";

  return req;
};

customAxios.interceptors.request.use((request) => reqHandler(request));

export default customAxios;

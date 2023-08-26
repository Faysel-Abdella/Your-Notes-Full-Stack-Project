import axios from "axios";
const customFetch = axios.create({
  baseURL: "https://your-notes-mern-stack-project-server-side.onrender.com",
  withCredentials: true,
});

export default customFetch;

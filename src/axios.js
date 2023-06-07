import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/the-local-store-e40b7/us-central1/api", //API cloud functio n URL
});
export default instance;

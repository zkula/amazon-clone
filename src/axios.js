import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-7de86.cloudfunctions.net/api",
  //   "http://localhost:5001/clone-7de86/us-central1/api", //The API (Cloud Function) URL
});

export default instance;

import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

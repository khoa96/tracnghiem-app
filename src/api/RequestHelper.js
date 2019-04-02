import axios from "axios";

const BASE_URL = "https://server-login-app.herokuapp.com";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type' : 'application/json',
    'token': 'nguyendangkhoahocviencongnghebuuchinhvienthong'
  }
});

export default function requestPopularHelper({ method, options }) {
  return instance({
    method,
    ...options
  }).then(response => {
    return Promise.resolve(response.data);
  });
}

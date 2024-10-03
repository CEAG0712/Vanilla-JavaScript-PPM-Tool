import axios from "axios";
import config from "../../configuration/env.config.js";
import Swal from "sweetalert2"; //https://sweetalert2.github.io/

const apiClient = axios.create({
  baseURL: config.backend_url,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json", 
  },
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response || error.response.status === 401) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Session time out, please login again",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
      localStorage.removeItem("auth");

      setTimeout(() => {
        location.href = "/login";
      }, 3000);
    }

    return Promise.reject(error);
  }
);

export default apiClient;

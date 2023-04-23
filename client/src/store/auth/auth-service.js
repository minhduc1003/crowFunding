import axios from "../../api/axios";
export const requestAuthRegister = (data) => {
  return axios.post("/auth/register", {
    ...data,
  });
};
export const requestAuthLogin = (data) => {
  return axios.post("/auth/login", {
    ...data,
  });
};
export const requestFetchMe = (token) => {
  return axios.get("/me", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
export const requestRefreshToken = (token) => {
  return axios.post("/token", {
    "Content-Type": "application/json",
    refreshToken: token,
  });
};

import axios from "axios";

// 기본 URL
const instance = axios.create({
  baseURL: "http://3.39.226.124/api",
  header: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// baseURL
export const baseURL = axios.create({
  baseURL: "http://3.39.226.124/api",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

//인스턴스 request header
baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("id");
  config.headers["Authorization"] = `${token}`;
  return config;
});

// apis
export const apis = {
  // 로그인 관련
  postLogin: (login) => instance.post("/user/login", login),
  postSignup: (signup) => instance.post("/user/signup", signup),
  checkUserName: (username) => instance.get(`/user/idcheck/${username}`),

  // 게시글 관련
  getPost: () => baseURL.get("/post"),
  getIdPost: (id) => baseURL.get(`/post/${id}`),
  createPost: (post) => baseURL.post("/post", post),
  deletePost: (id) => baseURL.delete(`/post/${id}`),
  editPost: (id, post) => baseURL.patch(`/post/${id}`, post),
};

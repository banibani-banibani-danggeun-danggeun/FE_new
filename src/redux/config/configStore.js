import { configureStore } from "@reduxjs/toolkit";
import posts from "../modules/postSlice";
import chats from "../modules/chatSlice";

const store = configureStore({
  reducer: { posts, chats },
});

export default store;

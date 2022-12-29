import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Main from "../pages/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Post from "../pages/Post";
import Detail from "../pages/Detail";
import Chat from "../pages/Chat";
import EditPost from "./../pages/EditPost";
import Kakao from "../pages/Kakao";
import ChatList from "../pages/ChatList";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="post" element={<Post />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="chat" element={<Chat />} />
          <Route path="mychat" element={<ChatList />} />
          <Route path="editpost/:id" element={<EditPost />} />
          <Route path="/api/user/kakao/callback" element={<Kakao />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Main from "../pages/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Post from "../pages/Post";
import Detail from "../pages/Detail";
import Chat from "../pages/Chat";

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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

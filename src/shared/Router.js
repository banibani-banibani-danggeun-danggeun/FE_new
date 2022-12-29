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
          <Route path="editpost/:id" element={<EditPost />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

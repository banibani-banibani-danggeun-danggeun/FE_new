import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __addPost } from "../redux/modules/postSlice";
import { useNavigate } from "react-router-dom";

const EditPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addPost, setAddPost] = useState({
    title: "",
    image: "",
    content: "",
    location: "",
    price: "",
  });

  const onClickAddPostHandler = (e) => {
    e.preventDefault();
    dispatch(__addPost(addPost));
    navigate(`/`); //post 후 detail로 넘어가게 하기
  };

  return (
    <Wrap>
      <Carrot>🥕 게시글 작성 🥕</Carrot>
      <Inputs>
        <Titleinput
          type="text"
          placeholder="제목"
          onChange={(e) => {
            setAddPost({ ...addPost, title: e.target.value });
          }}
        />
        <Imginput
          type="text"
          placeholder="image URL"
          onChange={(e) => {
            setAddPost({ ...addPost, image: e.target.value });
          }}
        />
        <Addressinput
          type="text"
          placeholder="거래 희망 장소"
          onChange={(e) => {
            setAddPost({ ...addPost, location: e.target.value });
          }}
        />
        <Priceinput
          type="number"
          placeholder="가격"
          onChange={(e) => {
            setAddPost({ ...addPost, price: e.target.value });
          }}
        />
        <Contentinput
          type="text"
          placeholder="게시글 내용을 작성해주세요.(가품 및 판매 금지 물품은 게시가 제한될 수 있어요.)"
          onChange={(e) => {
            setAddPost({ ...addPost, content: e.target.value });
          }}
        />
      </Inputs>
      <Btns>
        <Addbtn onClick={onClickAddPostHandler}>추가</Addbtn>
        <Movebtn>이전</Movebtn>
      </Btns>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 620px;
  height: 750px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid red; */
`;
const Carrot = styled.div`
  font-size: 60px;
  font-family: "Jua", sans-serif;
  color: #f76505;
  margin-bottom: 40px;
  text-align: center;
`;
const Inputs = styled.div`
  text-align: center;
`;
const Titleinput = styled.input`
  width: 600px;
  height: 50px;
  border-radius: 15px;
  margin-bottom: 30px;
  font-size: 20px;
  outline: none;
`;
const Imginput = styled.input`
  width: 600px;
  height: 50px;
  border-radius: 15px;
  margin-bottom: 30px;
  font-size: 20px;
  outline: none;
`;
const Addressinput = styled.input`
  width: 600px;
  height: 50px;
  border-radius: 15px;
  margin-bottom: 30px;
  font-size: 20px;
  outline: none;
`;
const Priceinput = styled.input`
  width: 600px;
  height: 50px;
  border-radius: 15px;
  margin-bottom: 30px;
  font-size: 20px;
  outline: none;
`;
const Contentinput = styled.textarea`
  width: 600px;
  height: 200px;
  border-radius: 15px;
  margin-bottom: 20px;
  font-size: 20px;
  outline: none;
  resize: none;
`;
const Btns = styled.div`
  display: flex;
  margin-left: 400px;
`;
const Addbtn = styled.button`
  width: 100px;
  height: 40px;
  font-size: 16px;
  background-color: transparent;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #f76505;
    color: white;
    border: none;
  }
`;
const Movebtn = styled.button`
  width: 100px;
  height: 40px;
  margin-left: 10px;
  font-size: 16px;
  background-color: transparent;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #f76505;
    color: white;
    border: none;
  }
`;

export default EditPost;

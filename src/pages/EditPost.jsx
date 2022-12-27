import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __editPost, __getPost } from "../redux/modules/postSlice";

const EditPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const { id } = useParams();

  const [editPost, setEditPost] = useState({
    title: "",
    image: "",
    content: "",
    location: "",
    price: "",
  });

  const onClickEditPostHandler = () => {
    const newPost = {
      title: title,
      image: image,
      content: content,
      location: location,
      price: price,
    };
    if (newPost.title === "") {
      alert("제목을 입력해주세요.");
    } else if (newPost.image === "") {
      alert("URL을 입력해주세요.");
    } else if (newPost.location === undefined) {
      alert("지역을 입력해주세요.");
    } else if (newPost.price === "") {
      alert("가격을 입력해주세요.");
    } else if (newPost.content === "") {
      alert("내용을 입력해주세요.");
    } else {
      dispatch(__editPost([newPost, id]));
    }

    // dispatch(__editPost([newPost, id]));
    // navigate(`/`); //post 후 detail로 넘어가게 하기
  };

  const selected = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(__getPost(Number(id)));
  }, [dispatch, id]);

  useEffect(() => {
    if (selected) {
      setTitle(selected.title);
      setImage(selected.image);
      setContent(selected.content);
      setLocation(selected.location);
      setPrice(selected.price);
    }
  }, [selected]);

  return (
    <Wrap>
      <Carrot>🥕 게시글 작성 🥕</Carrot>
      <Inputs>
        <Titleinput
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Imginput
          type="text"
          placeholder="image URL"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <Addressinput
          type="text"
          placeholder="거래 희망 장소"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <Priceinput
          type="number"
          placeholder="가격"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <Contenttextarea
          type="text"
          placeholder="게시글 내용을 작성해주세요.(가품 및 판매 금지 물품은 게시가 제한될 수 있어요.)"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </Inputs>
      <Btns>
        <Addbtn onClick={onClickEditPostHandler}>추가</Addbtn>
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
const Contenttextarea = styled.textarea`
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

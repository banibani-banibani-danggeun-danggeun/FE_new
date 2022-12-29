import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { __editPost, __getIdPost, reset } from "../redux/modules/postSlice";
import { IoIosArrowBack } from "react-icons/io";
import { VscMenu } from "react-icons/vsc";
import { VscCircleLargeOutline } from "react-icons/vsc";

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
      Swal.fire({ icon: "error", title: "제목을 입력해주세요!" });
      // alert("제목을 입력해주세요.");
    } else if (newPost.image === "") {
      Swal.fire({ icon: "error", title: "URL을 입력해주세요!" });
      // alert("URL을 입력해주세요.");
    } else if (newPost.location === "") {
      Swal.fire({ icon: "error", title: "지역을 입력해주세요!" });
      // alert("지역을 입력해주세요.");
    } else if (newPost.price === "") {
      Swal.fire({ icon: "error", title: "가격을 입력해주세요!" });
      // alert("가격을 입력해주세요.");
    } else if (newPost.content === "") {
      Swal.fire({ icon: "error", title: "내용을 입력해주세요!" });
      // alert("내용을 입력해주세요.");
    } else {
      dispatch(
        __editPost([newPost, id])
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err))
      );
      navigate(`/detail/${id}`);
    }

    // dispatch(__editPost([newPost, id]));
    //post 후 detail로 넘어가게 하기
  };

  useEffect(() => {
    dispatch(__getIdPost(Number(id)));
  }, [dispatch, id]);
  const selected = useSelector((state) => state.posts.detail);
  //detail에 가져온것처럼 똑같이 가져와야함.
  console.log(selected);

  useEffect(() => {
    if (selected) {
      console.log(selected);
      setTitle(selected.title);
      setImage(selected.image);
      setContent(selected.content);
      setLocation(selected.location);
      setPrice(selected.price);
    }
  }, [selected]);

  return (
    <Wrap>
      <Phone>
        <Carrot>🥕 게시글 수정 🥕</Carrot>
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
          <Addbtn onClick={onClickEditPostHandler}>수정완료</Addbtn>
        </Btns>
        <Underline>
          <Under>
            <IoIosArrowBack
              className="icon"
              size="40"
              color="white"
              onClick={() => navigate("/")}
            />
            <VscCircleLargeOutline className="icon" size="40" color="white" />
            <VscMenu className="icon" size="40" color="white" />
          </Under>
        </Underline>
      </Phone>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Phone = styled.div`
  //border: 1px solid red;
  border-radius: 20px;
  background-color: #212123;
  width: 520px;
  height: 800px;
`;
const Carrot = styled.div`
  font-size: 40px;
  font-family: "Jua", sans-serif;
  margin-bottom: -70px;
  margin-top: 10px;
  text-align: center;
  color: white;
`;
const Inputs = styled.div`
  text-align: center;
  margin-top: 100px;
`;
const Titleinput = styled.input`
  width: 450px;
  height: 50px;
  border-radius: 15px;
  margin-bottom: 30px;
  font-size: 20px;
  outline: none;
`;
const Imginput = styled.input`
  width: 450px;
  height: 50px;
  border-radius: 15px;
  margin-bottom: 30px;
  font-size: 20px;
  outline: none;
`;
const Addressinput = styled.input`
  width: 450px;
  height: 50px;
  border-radius: 15px;
  margin-bottom: 30px;
  font-size: 20px;
  outline: none;
`;
const Priceinput = styled.input`
  width: 450px;
  height: 50px;
  border-radius: 15px;
  margin-bottom: 30px;
  font-size: 20px;
  outline: none;
`;
const Contenttextarea = styled.textarea`
  width: 450px;
  height: 200px;
  border-radius: 15px;
  margin-bottom: 20px;
  font-size: 20px;
  outline: none;
  resize: none;
`;
const Btns = styled.div`
  display: flex;
  text-align: center;
  margin-left: 190px;
  //margin-top: 10px;
  margin-bottom: 15px;
`;
const Addbtn = styled.button`
  width: 120px;
  height: 40px;
  font-size: 16px;
  background-color: transparent;
  border-radius: 20px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  &:hover {
    border: 3px solid white;
  }
`;

const Underline = styled.div`
  border-top: 1px solid white;
`;
const Under = styled.div`
  width: 450px;
  display: flex;
  justify-content: space-between;
  margin-left: 25px;
  margin-top: 15px;
`;

export default EditPost;

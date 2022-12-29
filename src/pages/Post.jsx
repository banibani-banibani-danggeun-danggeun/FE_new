import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { __addPost, reset } from "../redux/modules/postSlice";
import { useNavigate, Navigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { VscMenu } from "react-icons/vsc";
import { VscCircleLargeOutline } from "react-icons/vsc";

const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addPost, setAddPost] = useState({
    title: "",
    image: "",
    content: "",
    location: "",
    price: "",
  });

  const addPostDone = useSelector((state) => state.posts.addPostDone);
  // addPostDone의 값이 바뀌면 화면을 다시 리렌더링 해줌.

  useEffect(() => {
    dispatch(reset());
    console.log(addPostDone);
  }, [dispatch, addPostDone]);

  const onClickAddPostHandler = (e) => {
    e.preventDefault();
    if (addPost.title === "") {
      Swal.fire({ icon: "error", title: "제목을 입력해주세요!" });
      // alert("제목을 입력해주세요.");
    } else if (addPost.image === "") {
      Swal.fire({ icon: "error", title: "URL을 입력해주세요!" });
      // alert("URL을 입력해주세요.");
    } else if (addPost.location === "") {
      Swal.fire({ icon: "error", title: "지역을 입력해주세요!" });
      // alert("지역을 입력해주세요.");
    } else if (addPost.price === "") {
      Swal.fire({ icon: "error", title: "가격을 입력해주세요!" });
      // alert("가격을 입력해주세요.");
    } else if (addPost.content === "") {
      Swal.fire({ icon: "error", title: "내용을 입력해주세요!" });
      // alert("내용을 입력해주세요.");
    } else {
      dispatch(__addPost(addPost)).then(() => console.log("하하"));
      console.log("여기");
      // "여기" 가 200완료보다 더 빨리됨.
      // navigate가 성공여부와 상관없이 홈으로 보내게 해서 여기에 navigate를 쓰면 안됨.
      // navigate는 평소에 사용해도 됬지만 이번 경우에만 안되었던 것..
    }
    // dispatch(__addPost(addPost));
    //navigate(`/`); //post 후 detail로 넘어가게 하기
  };

  return (
    <Wrap>
      <Phone>
        <Carrot>🥕 게시글 작성 🥕</Carrot>
        {addPostDone === false ? (
          <div>
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
            </Btns>
            <Underline>
              <Under>
                <IoIosArrowBack
                  className="icon"
                  size="40"
                  color="white"
                  onClick={() => navigate("/")}
                  cursor="pointer"
                />
                <VscCircleLargeOutline
                  className="icon"
                  size="40"
                  color="white"
                />
                <VscMenu className="icon" size="40" color="white" />
              </Under>
            </Underline>
          </div>
        ) : (
          <Navigate to="/" />
          // <div>zzz</div>
          // addPostDone이 initialstate가 false인데 false가 맞을 경우 (삼항연산자) true쪽을 실행하고 아닐경우 false 쪽이 실행된다.(postSlice177번 참고)
        )}
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
  border: none;
`;
const Imginput = styled.input`
  width: 450px;
  height: 50px;
  border-radius: 15px;
  margin-bottom: 30px;
  font-size: 20px;
  outline: none;
  border: none;
`;
const Addressinput = styled.input`
  width: 450px;
  height: 50px;
  border-radius: 15px;
  margin-bottom: 30px;
  font-size: 20px;
  outline: none;
  border: none;
`;
const Priceinput = styled.input`
  width: 450px;
  height: 50px;
  border-radius: 15px;
  margin-bottom: 30px;
  font-size: 20px;
  outline: none;
  border: none;
`;
const Contentinput = styled.textarea`
  width: 450px;
  height: 220px;
  border-radius: 15px;
  margin-bottom: 20px;
  font-size: 20px;
  outline: none;
  resize: none;
  border: none;
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
    font-weight: bold;
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

export default Post;

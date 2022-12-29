import styled from "styled-components";
import { __getIdPost, __deletePost } from "../redux/modules/postSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { __createRoom } from "../redux/modules/chatSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const details = useSelector((state) => state.posts.detail);
  console.log("details:", details);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("id") !== null) {
      setIsLogin(true);
    }
    dispatch(__getIdPost(Number(id)));
  }, [dispatch, id]);
  // 12번에서 details에 대한 edit은 지정해주지 않아서 수정이 바로 되지 않음.
  // 새로고침했을 때 수정이 되는 이유는 22번의 dispatch 때문.
  // postslice에 details가 수정됬을 때의 경우를 넣어줌.(296-303)

  const onClickDeletePostHandler = () => {
    if (isLogin === true) {
      dispatch(__deletePost(id));
      alert("삭제 완료되었습니다.");
      //navigate(`/`);
    } else {
      alert("로그인 후 이용 가능합니다.");
    }
  };

  const onClickEditPostHandler = (nickname) => {
    //if (isLogin === true) {
    //if (nickname === localStorage.getItem("nickname")) {
    ////localStorage.getItem = key(nickname)로부터 data 읽기
    navigate(`/editpost/${id}`);
    //} else {
    //alert("타인의 게시물을 수정할 수 없습니다.");
    //}
    //} else {
    //alert("로그인 후 이용 가능합니다.");
    //}
  };
  console.log("isLogin:", isLogin);

  const createRoom = (postId) => {
    dispatch(__createRoom(postId));
    navigate("/chat");
  };

  return (
    <div>
      <Wrap>
        <Imgarea src={details.image} />

        <Wraps>
          <Div>
            <Mine>
              <Nickimg src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-c649f052a34ebc4eee35048815d8e4f73061bf74552558bb70e07133f25524f9.png" />
              <Nickname>
                <p>{details.nickname}</p>
              </Nickname>
              <Address>{details.location}</Address>
            </Mine>
            {details.nickname === localStorage.getItem("nickname") ? (
              <Buttons>
                <Rewritebtn onClick={onClickEditPostHandler}>수정</Rewritebtn>
                <Deletebtn onClick={onClickDeletePostHandler}>삭제</Deletebtn>
              </Buttons>
            ) : null}
            {/* 내가 추가한 게시물에서만 수정,삭제 버튼이 나오게 함. 삼항연산자 사용 */}
            <Temperateimg src="https://cdn.discordapp.com/attachments/1047386886269829182/1056254271278043136/KakaoTalk_20221224_185732752.png"></Temperateimg>
          </Div>
        </Wraps>
        <Content>
          <Wraping>
            <Contents>
              <Name>{details.title}</Name>
              <Chatbtn onClick={() => createRoom(details.id)}>채팅하기</Chatbtn>
            </Contents>
            <Othercontents>
              <Category>액세서리 / 6일전</Category>
              <Price>{details.price}</Price>
              <Explain>{details.content}</Explain>
              <Etc>관심3 / 채팅19 / 조회 200</Etc>
            </Othercontents>
          </Wraping>
        </Content>
        <Cardsbtn>
          <Cardstitle>🥕당근마켓 인기중고</Cardstitle>
          <Morecontent onClick={() => navigate("/")}>더 구경하기</Morecontent>
        </Cardsbtn>
        <Wrapcards>
          <Etccards>
            <Cardimgarea src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMDZfMjYx%2FMDAxNDgzNjkyMzU1NDA1.vOAssOnraxfU0SWcADvqBbNNyMLYKPQ6mSf_2yWUULEg.ya9t6FPSXdGJDbONkWSPI7pfnssDFkmGDlYFmPd3id8g.JPEG.luric%2FIMG_3408.JPG&type=a340" />
            <Etctextwrap>
              <Cardtitle>시계</Cardtitle>
              <Cardprice>50,000원</Cardprice>
              <Cardaddress>영등포구 대림제2동</Cardaddress>
              <Cardetc>관심7 / 채팅16</Cardetc>
            </Etctextwrap>
          </Etccards>
          <Etccards>
            <Cardimgarea src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fdnvefa72aowie.cloudfront.net%2Forigin%2Farticle%2F202202%2F3D42DEB23A570EAA3A1F13CBF1DCFAC65466C94C8DCB9C90A6CEF9B2E176CE6B.jpg%3Fq%3D95%26s%3D1440x1440%26t%3Dinside&type=a340" />
            <Etctextwrap>
              <Cardtitle>미러리스 사진 잘찍는법</Cardtitle>
              <Cardprice>7,000원</Cardprice>
              <Cardaddress>서울시 마포구</Cardaddress>
              <Cardetc>관심2 / 채팅3</Cardetc>
            </Etctextwrap>
          </Etccards>
          <Etccards>
            <Cardimgarea src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMjhfMTY2%2FMDAxNjY2ODg3NDcxOTIy.vVYIjHrb77oHGuRvArD4TbGOK1ZAJX6FLnjXkb9TBNUg.7rwIr3wIz5bN8ufo2miguiDZtMns8zgkZ7_R4u9fEK8g.JPEG.kimdhevbb98%2F20221027%25A3%25DF232301.jpg&type=a340" />
            <Etctextwrap>
              <Cardtitle>갤럭시 S21</Cardtitle>
              <Cardprice>30,000원</Cardprice>
              <Cardaddress>경기 의정부시</Cardaddress>
              <Cardetc>관심30 / 채팅45</Cardetc>
            </Etctextwrap>
          </Etccards>
        </Wrapcards>
      </Wrap>
    </div>
  );
};

const Wrap = styled.div`
  /* height: 1100px; */
  width: 850px;
  min-width: 100%;
  position: relative;
  display: block;
  overflow: clip;
  /* border: 1px solid red; */
  margin-top: 20px;
`;
const Imgarea = styled.img`
  width: 850px;
  height: 650px;
  /* border: 1px solid green; */
  border-radius: 15px;
`;
const Nickimg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 10px;
`;
const Nickname = styled.div`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.6px;
  line-height: 22.5px;
  &:hover {
    text-decoration: underline solid rgb(33, 37, 41);
  }

  word-spacing: 0px;
  height: 22.5px;
  width: 71.375px;
  display: block;
  cursor: pointer;
  margin-left: 10px;
`;
const Address = styled.p`
  width: 410px;
  //border: 1px solid red;
  height: 40px;
`;
const Temperateimg = styled.img`
  width: 200px;
  height: 80px;
  margin-left: -10px;
`;
const Div = styled.div`
  display: flex;
`;
const Mine = styled.div`
  display: flex;
  margin-top: 13px;
`;
const Wraps = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  height: 100px;
  border-bottom: 2px solid rgb(193, 195, 196);
`;
const Rewritebtn = styled.button`
  margin-right: 2px;
  border: none;
  background-color: transparent;
  /* text-decoration: underline solid rgb(33, 37, 41); */
  font-size: 17px;
  cursor: pointer;
`;
const Deletebtn = styled.button`
  margin-right: 2px;
  border: none;
  background-color: transparent;
  /* text-decoration: underline solid rgb(33, 37, 41); */
  font-size: 17px;
  cursor: pointer;
`;
const Buttons = styled.div`
  margin-top: 30px;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;
const Wraping = styled.div`
  width: 850px;
  height: 300px;
  border-bottom: 2px solid rgb(193, 195, 196);
  margin-bottom: 10px;
`;
const Contents = styled.div`
  width: 840px;
  height: 70px;
  /*border: 1px solid green;*/
  margin-top: 2px;
  display: flex;
  justify-content: space-between;
`;
const Othercontents = styled.div`
  width: 850px;
`;
const Name = styled.p`
  font-size: 25px;
  font-weight: bold;
`;
const Category = styled.p`
  color: grey;
  font-size: 17px;
`;
const Price = styled.p`
  font-size: 25px;
  font-weight: bold;
`;
const Explain = styled.p`
  font-size: 20px;
`;
const Etc = styled.p`
  color: grey;
  font-size: 17px;
  margin-bottom: -50px;
`;
const Chatbtn = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 20px;
  background-color: transparent;
  border: 2px solid black;
  color: black;
  font-size: 16px;
  border-radius: 20px;
  &:hover {
    background-color: #f76605;
    border: none;
    color: white;
  }
  cursor: pointer;
`;
const Cardstitle = styled.div`
  font-size: 23px;
  font-weight: bold;
`;
const Morecontent = styled.div`
  font-size: 20px;
  color: rgb(240, 149, 30);
  cursor: pointer;
`;
const Cardsbtn = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  margin-bottom: 35px;
`;
const Wrapcards = styled.div`
  display: flex;
  justify-content: space-between;
  width: 850px;
  margin-bottom: 20px;
`;
const Etccards = styled.div`
  /* border: 1px solid red; */
  width: 250px;
  height: 430px;
  cursor: pointer;
`;
const Cardimgarea = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 15px;
`;
const Cardtitle = styled.div`
  font-size: 22px;
  margin-bottom: 5px;
`;
const Cardprice = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const Cardaddress = styled.div`
  font-size: 17px;
  margin-bottom: 20px;
`;
const Cardetc = styled.div`
  font-size: 15px;
  color: grey;
`;
const Etctextwrap = styled.div`
  width: 245px;
  height: 120px;
  /* border: 1px solid green; */
  margin: auto;
`;

export default Detail;

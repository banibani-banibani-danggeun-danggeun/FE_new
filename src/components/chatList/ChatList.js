import styled, { css } from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { __createChatRoom, __getChatRoom } from "../../redux/modules/chatSlice";
import { useNavigate } from "react-router-dom";

const ChatList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const chatRoomList = () => {
  //   dispatch(__getChatRoom()).then((res) => console.log(res));
  //   navigate("/chat");
  // };

  //   const sock = new SockJS("http://43.200.248.80/ws-stomp");
  //   const ws = Stomp.over(sock);
  //   console.log("sock--->", sock);
  //   console.log("ws--->", ws);

  // const client = Stomp.Client;

  // var stompClient = null;

  // function connect(temp) {
  //   // dispatch(__createChatRoom());
  //   alert(temp);
  //   // dispatch(__getChatRoom()).then((res) => console.log("res--->", res));

  //   //var socket = new SockJS("/websock");
  //   //var socket = new SockJS("/websock"+temp);
  //   const sock = new SockJS("http://43.200.248.80/ws-stomp");
  //   //context_path == "/SupportCenter"
  //   stompClient = Stomp.over(sock);
  //   // stompClient.ws.url = "http://localhost:3000/chat/"
  //   stompClient.connect(
  //     {},
  //     function (frame) {
  //       console.log("Connected :- " + frame);
  //       stompClient.subscribe("/chat/rooms", function (notifications) {
  //         alert(notifications);
  //       });
  //     },
  //     function (error) {
  //       alert(error);
  //     }
  //   );
  //   // alert();
  //   console.log("stompClient--->", stompClient);
  //   getNotifications();
  // }

  // function getNotifications() {
  //   stompClient.send("/chat/rooms", {}, "Hiiiiii");
  // }

  // const connect = () => {
  //   ws.onConnect({}, (frame) => {
  //     ws.subscribe('/chat/rooms', () => {
  //       const parsed = JSON.parse()
  //     })
  //   })
  // }

  useEffect(() => {
    dispatch(__getChatRoom()).then((res) => console.log(res));
    // dispatch(__createChatRoom());
  }, [dispatch]);

  //   const chatRoomList = () => {
  //     dispatch(__createChatRoom());
  //     navigate("/chat");
  //   };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // connect();
        }}
      >
        <label htmlFor="roomname" />
        <input
          type="text"
          id="roomname"
          onChange={(e) => e.target.value}
          placeholder="채팅방 이름을 입력하세요"
        />
        <button>채팅방 개설</button>
      </form>
      <StDiv chat_list>
        <StP my_chat>구매 가능한가요?</StP>
        <StP you_chat>응 가능</StP>
        <StP my_chat>구매 가능한가요?</StP>
        <StP you_chat>응 가능</StP>
        <StP my_chat>구매 가능한가요?</StP>
        <StP you_chat>응 가능</StP>
        <StP my_chat>구매 가능한가요?</StP>
        <StP you_chat>응 가능</StP>
        <StP my_chat>구매 가능한가요?</StP>
        <StP you_chat>응 가능</StP>
        <StP my_chat>구매 가능한가요?</StP>
        <StP you_chat>응 가능</StP>
        <StP my_chat>구매 가능한가요?</StP>
        <StP you_chat>응 가능</StP>
        <StP my_chat>구매 가능한가요?</StP>
        <StP you_chat>응 가능</StP>
        <StP my_chat>구매 가능한가요?</StP>
        <StP you_chat>응 가능</StP>
        <StP my_chat>구매 가능한가요?</StP>
        <StP you_chat>응 가능</StP>
        <StP my_chat>구매 가능한가요?</StP>
        <StP you_chat>응 가능</StP>
      </StDiv>
      <StDiv chat_chat>
        <AiOutlinePlus size="30" />
        <StInput type="text" />
        <RiSendPlaneFill size="30" />
      </StDiv>
    </div>
  );
};

const StDiv = styled.div`
  ${(props) =>
    props.chat_box &&
    css`
      background-color: #212123;
      width: 380px;
      height: 700px;
      color: white;
      border-radius: 10px;
    `}
  ${(props) =>
    props.header_chat &&
    css`
      border-bottom: 1px solid #4a4a4a;
    `}
    ${(props) =>
    props.product_box &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px;
    `}
    ${(props) =>
    props.product_imgtxt &&
    css`
      display: flex;
      align-items: center;
    `}
    ${(props) =>
    props.police_line &&
    css`
      background-color: #46494d;
      width: 280px;
      height: 30px;
      padding: 10px;
      border-radius: 10px;
      margin: 0 auto;
    `}
      ${(props) =>
    props.product_line &&
    css`
      border-top: 1px solid #4a4a4a;
      margin-bottom: 5px;
    `}
    ${(props) =>
    props.chat_list &&
    css`
      width: 360px;
      height: 390px;
      margin-top: 5px;
      padding: 10px;
      display: flex;
      flex-flow: column nowrap;
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    `}
    ${(props) =>
    props.chat_chat &&
    css`
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 10px 10px;
    `}
`;

const StInput = styled.input`
  width: 280px;
  height: 20px;
  background-color: #46494d;
  border-radius: 20px;
  border: 0;
  color: white;
  font-size: 14px;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

const StP = styled.p`
  ${(props) =>
    props.product_txt &&
    css`
      margin: 5px;
    `}
  ${(props) =>
    props.product_title &&
    css`
      margin: 0 10px 25px 0;
    `}
${(props) =>
    props.police_txt &&
    css`
      font-size: 12px;
      color: #f76605;
      margin: 0;
    `}
    ${(props) =>
    props.my_chat &&
    css`
      margin: 0;
      background-color: #de9269;
      text-align: center;
      float: right;
      width: 95px;
      color: black;
      border-radius: 10px;
      padding: 3px 5px;
      font-size: 13px;
      display: block;
    `}
    ${(props) =>
    props.you_chat &&
    css`
      margin: 0;
      background-color: #fff;
      text-align: center;
      float: left;
      width: 45px;
      color: black;
      border-radius: 10px;
      padding: 3px 5px;
      font-size: 13px;
    `}
`;

export default ChatList;

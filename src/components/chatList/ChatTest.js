import styled, { css } from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
// import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../../lib/utils/useInput";
import { __getChatRoom } from "../../redux/modules/chatSlice";

import Stomp from "stompjs";
import sockJS from "sockjs-client";
// import { apis } from "../../lib/axios";

const ChatTest = () => {
  // const [roomName, setRoomName] = useInput();
  const dispatch = useDispatch();

  const socket = new sockJS("ws-stomp");
  const ws = Stomp.over(socket);

  const chats = useSelector((state) => state.chats.chats);
  console.log("chats--->", chats);

  const getChatRoom = () => {
    dispatch(__getChatRoom()).then((res) => {
      console.log("getChatRoom res--->", res);
    });
    //   axios.get("http://43.200.248.80/chat/rooms").then((res) => {
    //   console.log("getChatRoom res--->", res);
    //   data.chatrooms = res.data;
    // });
  };

  useEffect(() => {
    getChatRoom();
  }, []);

  // 토큰
  const token = localStorage.getItem("id");

  // 방 제목 가져오기
  const roomId = chats.roomId;
  console.log("roomId--->", roomId);

  // 상대방 유저 닉네임
  const postUserNickname = chats.postUserNickname;
  console.log("postUserNickname--->", postUserNickname);

  // 보낼 메시지 텍스트
  const [messages, setMessages] = useInput();
  console.log("messageText--->", messages);

  // sender 정보 가져오기
  const sender = localStorage.getItem("nickname");
  console.log("sender--->", sender);

  // 렌더링 될 때마다 연결, 구독 다른 방으로 옮길 때 연결, 구독 해제
  useEffect(() => {
    // waitForConnection(ws, socketSubscribe());
    socketSubscribe();
    // return () => {
    //   socketUnsubscribe();
    // };
  }, [roomId]);

  /*
  // 소켓 연결이 계속 끊길 때
  const waitForConnection = (stompClient, callback) => {
    setTimeout(function () {
      if (stompClient.ws.readyState === 1) {
        console.log("Connection is made");
        if (callback !== null) {
          callback();
        }
      } else {
        console.log("wait for connection...");
        waitForConnection(stompClient, callback);
      }
    }, 250);
  };
  */

  // 웹소켓 연결, 구독
  const socketSubscribe = () => {
    try {
      ws.connect(
        {
          token: token,
        },
        () => {
          ws.subscribe(
            `/sub/chat/room/${roomId}`,
            (data) => {
              const newMessage = JSON.parse(data.body);
              console.log("newMessage---> ", newMessage);
              //   setSemiMsgList(response);
              // dispatch(chatActions.getMessages(newMessage))

              //   if (response.type === "JOIN" || response.type === "LEAVE") {
              //     // queryClient.invalidateQueries(["room_list"]);
              //   }
              //   if (response.type === "JOIN") {
              //     // setUserList(response.connectedUsers);
              //     // userHistory();
              //   }
            },
            { token: token }
          );
          console.log("연결되었습니다");
          // sendMessage();
          enterMessage();
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  // 연결 해제, 구독 해제
  //   const socketUnsubscribe = () => {
  //     try {
  //         ws.disconnect(
  //             () => {
  //                 ws.unsubscribe(`/sub/public`) // ??? 물어봐야함
  //             },
  //             {token: token}
  //         );
  //       // console.log("success to unsubscribe");
  //     } catch (error) {
  //       // console.log(error);
  //     }
  //   };

  // 입장 메세지
  const enterMessage = () => {
    try {
      if (!token) {
        alert("토큰이 없습니다. 다시 로그인 해주세요.");
        // history.replace("/");
      }
      // send할 데이터
      const data = {
        type: "ENTER",
        roomId: roomId,
        sender: sender,
        message: `${sender}님이 채팅방에 참여하였습니다!`,
      };
      ws.send("/pub/chat/message", {}, JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  };

  // 채팅 메세지 보내기
  const sendMessage = () => {
    try {
      if (!token) {
        alert("토큰이 없습니다. 다시 로그인 해주세요.");
        // history.replace('/')
      }
      // send할 데이터
      const data = {
        type: "TALK",
        roomId: roomId,
        // nickname: localStorage.getItem("nickname"),
        sender: sender,
        message: messages,
      };

      // 빈 문자열이면 리턴
      if (messages === "") {
        return;
      }
      ws.send("/pub/chat/message", { token: token }, JSON.stringify(data));
    } catch {}
  };

  //   const createRoom = () => {
  //     if ("" === roomName) {
  //       alert("방 제목을 입력해 주세요");
  //       return;
  //     } else {
  //       let params = new URLSearchParams();
  //       params.append("name", roomName);
  //       dispatch(__createChatRoom(roomName))
  //         //   axios
  //         //     .post("http://43.200.248.80/chat/room")
  //         .then((res) => {
  //           alert(res.data.name + "방 개설에 성공하였습니다");
  //           // roomName = '';
  //           getChatRoom();
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //           alert("채팅방 개설에 실패하였습니다");
  //         });
  //     }
  //   };

  //   const enterRoom = (roomId) => {
  //     const sender = prompt("대화명을 입력해 주세요");
  //     if (sender !== "") {
  //       localStorage.setItem("wschat.sender", sender);
  //       localStorage.setItem("wschat.roomId", roomId);
  //       dispatch(__enterRoom(JSON.stringify(roomId)));
  //       //   axios.get(`http://43.200.248.80/chat/room/enter/${roomId}`);
  //     }
  //   };

  return (
    <div>
      <StDiv chat_list>
        {/* <div class="container" id="app" v-cloak : display-none> */}
        <h3>채팅방 리스트</h3>
        {/* <div>
            <label htmlFor="roomname">방제목</label>
            <input
              type="text"
              id="roomname"
              value={roomName || ""}
              onChange={setRoomName}
            /> */}
        {/* v-on:keyup.enter="createRoom" /> */}
        {/* </div> */}
        {/* <div>
            <button type="button">채팅방 개설</button> */}
        {/* @click="createRoom"> */}
        {/* </div> */}
      </StDiv>
      <StDiv chat_chat>
        <AiOutlinePlus size="30" />
        <StInput
          type="text"
          id="messages"
          value={messages}
          onChange={setMessages}
        />
        <RiSendPlaneFill size="30" onClick={sendMessage} />
      </StDiv>
    </div>
  );
};

const StDiv = styled.div`
  ${(props) =>
    props.chat_list &&
    css`
      width: 360px;
      height: 405px;
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

export default ChatTest;

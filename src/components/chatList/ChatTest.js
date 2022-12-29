import styled, { css } from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useInput } from "../../lib/utils/useInput";
import { __getChatRoom, __getMessage } from "../../redux/modules/chatSlice";
import Stomp from "stompjs";
import sockJS from "sockjs-client";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ChatTest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const socket = new sockJS("https://jong-10.shop/ws-stomp");
  const ws = Stomp.over(socket);

  const chats = useSelector((state) => state.chats.chats);
  console.log("chats--->", chats);

  const messageLists = useSelector((state) => state.chats.messages);
  console.log("messageLists--->", messageLists);

  const getChatRoom = () => {
    dispatch(__getChatRoom()).then((res) => {
      console.log("getChatRoom res--->", res);
    });
  };

  const getMessage = (roomId) => {
    dispatch(__getMessage(roomId)).then((res) => {
      console.log("getMessage res--->", res);
    });
  };

  // 토큰
  const token = localStorage.getItem("id");

  // 방 제목 가져오기
  const roomId = chats.roomId;
  console.log("roomId--->", roomId);

  // 상대방 유저 닉네임
  const postUserNickname = chats.postUserNickname;
  console.log("postUserNickname--->", postUserNickname);

  // 보낼 메시지 텍스트
  const [messages, setMessages] = useState([]);
  console.log("messageText--->", messages);

  // sender 정보 가져오기
  const sender = localStorage.getItem("nickname");
  console.log("sender--->", sender);

  // 렌더링 될 때마다 연결, 구독 다른 방으로 옮길 때 연결, 구독 해제
  useEffect(() => {
    // waitForConnection(ws, socketSubscribe());
    console.log("연결 확인");
    getChatRoom();
    getMessage(roomId);
    // return () => {
    //   socketUnsubscribe();
    // };
  }, [roomId]);

  useEffect(() => {
    setMessages(...messageLists);
  }, [messageLists]);

  useEffect(() => {
    socketSubscribe();
  }, []);

  const messageChange = (e) => {
    setMessages(e.target.value);
  };
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
      console.log("try 확인");
      ws.connect(
        {
          token: token,
        },
        () => {
          console.log("sub 확인");
          // console.log("roomId:", roomId);
          ws.subscribe(
            `/sub/chat/room/${roomId}`,
            (data) => {
              const newMessage = JSON.parse(data.body);
              console.log("newMessage---> ", newMessage);
              const newList = messages;
              setMessages([...newList, newMessage]);
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
          // enterMessage();
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

  /*
  // 입장 메세지
  const enterMessage = () => {
    try {
      if (!token) {
        alert("토큰이 없습니다. 다시 로그인 해주세요.");
        // history.replace("/");
        // navigate('/login');
      }
      // send할 데이터
      // const data = {
      //   type: "ENTER",
      //   roomId: roomId,
      //   sender: sender,
      //   // message: joinMsg,
      //   message: `${sender}님이 채팅방에 참여하였습니다!`,
      // };
      // if (data.type === "ENTER") {
      // ws.send("/pub/chat/message", {}, JSON.stringify(data));
      // }
    } catch (err) {
      console.log(err);
    }
  };
  */

  // 채팅 메세지 보내기
  const sendMessage = () => {
    try {
      if (!token) {
        Swal.fire("토큰이 없습니다", "다시 로그인 해주세요!", "error");
        // alert("토큰이 없습니다. 다시 로그인 해주세요.");
        navigate("/login");
        // history.replace('/')
        return;
      }
      // send할 데이터
      const data = {
        type: "TALK",
        roomId: roomId,
        sender: sender,
        message: messages,
      };

      console.log("sendData--->", data);
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
        <h5 style={{ textAlign: "center" }}>
          {sender}님이 채팅방에 입장하였습니다
        </h5>
        <div>
          {messageLists?.map((msg) => (
            <StDiv msg_lists>
              <StDiv date_>{msg.createdAt.slice(11, 16)}</StDiv>
              <StDiv sender>{msg.sender}</StDiv>
              <StDiv msg>{msg.message}</StDiv>
            </StDiv>
          ))}
        </div>
      </StDiv>
      <StDiv chat_chat>
        <AiOutlinePlus size="30" />
        <StInput
          type="text"
          id="messages"
          // value={messages || ""}
          onChange={messageChange}
          placeholder="채팅을 입력하세요"
        />
        <RiSendPlaneFill
          size="30"
          onClick={sendMessage}
          style={{ cursor: "pointer" }}
        />
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
    ${(props) =>
    props.msg_lists &&
    css`
      display: flex;
      align-items: center;
      gap: 5px;
    `}
      ${(props) =>
    props.sender &&
    css`
      padding: 5px;
      margin: 5px;
      background-color: #46494e;
      border-radius: 10px;
      font-size: 11px;
    `}
      ${(props) =>
    props.msg &&
    css`
      padding: 5px;
      margin: 5px;
      background-color: #fc8753;
      border-radius: 10px;
      font-size: 13px;
    `}
    ${(props) =>
    props.date_ &&
    css`
      color: #d8d6d6;
      font-size: 8px;
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

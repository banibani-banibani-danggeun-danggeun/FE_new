import styled, { css } from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../../lib/utils/useInput";
import {
  __getChatList,
  __getChatRoom,
  __getMessage,
} from "../../redux/modules/chatSlice";
import Stomp from "stompjs";
import sockJS from "sockjs-client";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ChatTest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const socket = new sockJS("http://43.200.248.80/ws-stomp");
  const ws = Stomp.over(socket);

  const chats = useSelector((state) => state.chats.chats);
  console.log("chats--->", chats);

  const messageLists = useSelector((state) => state.chats.messages);
  console.log("messageLists--->", messageLists);

  const chatLists = useSelector((state) => state.chats.chatLists);
  console.log("chatLists--->", chatLists);

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

  const getChatRoom = () => {
    dispatch(__getChatRoom()).then((res) => {
      console.log("getChatRoom res--->", res);
    });
  };

  const getChatList = (sender) => {
    dispatch(__getChatList(sender)).then((res) => {
      console.log("getChatList res--->", res);
    });
  };

  //   const getMessage = (roomId) => {
  //     dispatch(__getMessage(roomId)).then((res) => {
  //       console.log("getMessage res--->", res);
  //     });
  //   };

  // 렌더링 될 때마다 연결, 구독 다른 방으로 옮길 때 연결, 구독 해제
  useEffect(() => {
    // waitForConnection(ws, socketSubscribe());
    console.log("연결 확인");
    socketSubscribe();
    getChatList(sender);
    // getMessage(roomId);
    // console.log("68-roomId", roomId);
    // return () => {
    //   socketUnsubscribe();
    // };
  }, [sender]);

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
              setMessages(newMessage.message);
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

  const enterChatRoom = (roomId) => {
    getChatRoom(roomId);
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
      <StH5>My Chat Room List</StH5>
      {chatLists?.map((chat) => (
        <StDiv
          chat_room_list
          key={chat.roomId}
          onClick={() => {
            enterChatRoom(roomId);
            navigate("/chat");
          }}
        >
          <div>{chat.postUserNickname}</div>
          <div>{chat.title}</div>
        </StDiv>
      ))}
    </div>
  );
};

const StH5 = styled.h5`
  text-align: center;
  color: #fb7f46;
`;
const StDiv = styled.div`
  ${(props) =>
    props.chat_room_list &&
    css`
      display: flex;
      justify-content: space-between;
      width: 320px;
      height: 40px;
      margin: 10px;
      background-color: #4a4a4a;
      border-radius: 10px;
      padding: 5px 20px;
      line-height: 40px;
      }
    `}
`;

export default ChatTest;

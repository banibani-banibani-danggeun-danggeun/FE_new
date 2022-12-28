import { Stomp } from "@stomp/stompjs";
import axios from "axios";
import { useEffect } from "react";
import SockJS from "sockjs-client";
import { useInput } from "../../lib/utils/useInput";

const ChatMessage = () => {
  const [message, setMessage] = useInput();

  let sock = new SockJS("/ws-stomp");
  let ws = Stomp.over(sock);
  let reconnect = 0;

  const data = {
    roomId: "",
    room: {},
    sender: "",
    message: "",
    messages: [],
  };

  useEffect(() => {
    tokenGet();
  }, []);

  const tokenGet = () => {
    data.roomId = localStorage.getItem("wschat.roomId");
    data.sender = localStorage.getItem("wschat.sender");
    findRoom();
  };

  const findRoom = () => {
    axios.get(`/chat/room/${data.roomId}`).then((res) => {
      console.log("findRoom res--->", res);
      data.room = res.data;
    });
  };

  const sendMessage = () => {
    ws.send(
      "/pub/chat/message",
      {},
      JSON.stringify({
        type: "TALK",
        roomId: data.roomId,
        sender: data.sender,
        message: data.message,
      })
    );
    data.message = "";
  };

  //   const handleKeyPress = (e) => {
  //     if (e.key === "Enter") {
  //       sendMessage();
  //     }
  //   };

  const recvMessage = (recv) => {
    data.messages.unshift({
      type: recv.type,
      sender: recv.type === "Enter" ? "[알림]" : recv.sender,
      message: recv.message,
    });
  };

  const connect = () => {
    ws.connect(
      {},
      (frame) => {
        ws.subscribe("/sub/chat/room" + data.roomId, () => {
          const recv = JSON.parse(message.body);
          recvMessage(recv);
        });
        ws.send(
          "pub/chat/message",
          {},
          JSON.stringify({
            type: "ENTER",
            roomId: data.roomId,
            sender: data.sender,
          })
        );
      },
      (err) => {
        if (reconnect++ <= 5) {
          setTimeout(() => {
            console.log("Connection reconnect");
            sock = new SockJS("/ws-stomp");
            ws = Stomp.over(sock);
            connect();
          }, 10 * 1000);
        }
      }
    );
  };
  connect();

  return (
    <div>
      {/* <div class="container" id="app" v-cloak> */}
      <div>{/* <h2>{data.room}</h2> */}</div>
      <div>
        <div>
          <label htmlFor="message">내용</label>
          <input
            type="text"
            id="message"
            value={message || ""}
            onChange={setMessage}
            // onKeyPress={handleKeyPress}
          />
          {/* v-on:keypress.enter="sendMessage" */}
        </div>
        <div>
          <button type="button" onClick={sendMessage}>
            보내기
          </button>
          {/*  @click="sendMessage" */}
        </div>
      </div>
      <ul>
        <li>
          {/* {data.messages.message?.map((d) => (
          {data.messages?.map((m) => (
            <li>
              {m.message.sender} - {m.message.message}
            </li>
          ))} */}
          {/* <li v-for="message in messages">
          {{message.sender}} - {{message.message}}</a> */}
        </li>
      </ul>
    </div>
  );
};

export default ChatMessage;

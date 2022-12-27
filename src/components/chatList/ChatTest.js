import axios from "axios";
import { useEffect } from "react";
import { useInput } from "../../lib/utils/useInput";

const ChatTest = () => {
  const [roomName, setRoomName] = useInput();

  const data = {
    roomName,
    chatrooms: [],
  };

  const getChatRoom = () => {
    axios.get("http://43.200.248.80/chat/rooms").then((res) => {
      console.log("getChatRoom res--->", res);
      data.chatrooms = res.data;
    });
  };

  useEffect(() => {
    getChatRoom();
  }, []);

  const createRoom = () => {
    if ("" === roomName) {
      alert("방 제목을 입력해 주세요");
      return;
    } else {
      let params = new URLSearchParams();
      params.append("name", roomName);
      axios
        .post("http://43.200.248.80/chat/room")
        .then((res) => {
          alert(res.data.name + "방 개설에 성공하였습니다");
          // roomName = '';
          getChatRoom();
        })
        .catch((err) => {
          console.log(err);
          alert("채팅방 개설에 실패하였습니다");
        });
    }
  };

  const enterRoom = (roomId) => {
    const sender = prompt("대화명을 입력해 주세요");
    if (sender !== "") {
      localStorage.setItem("wschat.sender", sender);
      localStorage.setItem("wschat.roomId", roomId);
      axios.get(`http://43.200.248.80/chat/room/enter/${roomId}`);
    }
  };

  return (
    <div>
      {/* <div class="container" id="app" v-cloak : display-none> */}
      <div>
        <div>
          <div>
            <h3>채팅방 리스트</h3>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="roomname">방제목</label>
            <input
              type="text"
              id="roomname"
              value={roomName || ""}
              onChange={setRoomName}
            />
            {/* v-on:keyup.enter="createRoom" /> */}
          </div>
          <div>
            <button type="button" onClick={createRoom}>
              채팅방 개설
            </button>
            {/* @click="createRoom"> */}
          </div>
        </div>
        <ul>
          {data.chatrooms.map((chat) => (
            <div key={chat.roomId}>
              <p onClick={enterRoom}>{chat.roomId}</p>
            </div>
          ))}
          <li
          // class="list-group-item list-group-item-action"
          // v-for="item in chatrooms"
          // v-bind:key="item.roomId"
          // v-on:click="enterRoom(item.roomId)"
          >
            {/* {{item.name}} */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChatTest;

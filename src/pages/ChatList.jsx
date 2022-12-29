import styled, { css } from "styled-components";
import MyChat from "../components/chatList/MyChat";
import { FaCarrot } from "react-icons/fa";

const ChatList = () => {
  return (
    <div>
      <StDiv chat_box>
        <StDiv header_chat>
          <StH2>
            <FaCarrot />
            {localStorage.getItem("nickname")}
          </StH2>
        </StDiv>
        <MyChat />
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

const StH2 = styled.h2`
  text-align: center;
  margin: 0;
  padding: 20px 0px;
`;

export default ChatList;

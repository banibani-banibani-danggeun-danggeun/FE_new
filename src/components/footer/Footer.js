import styled, { css } from "styled-components";
import { BsGithub } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { SiNaver, SiNotion } from "react-icons/si";

const Footer = () => {
  const chan = "https://github.com/front-chan";
  const hayoung = "https://github.com/hannahcodes0";
  const saeyeon = "https://github.com/saeyeonKim";
  const yeol = "https://github.com/misracis2";
  const jaeha = "https://github.com/wogk9854";
  const jongyeol = "https://github.com/jongyeol2";
  const gyumin = "https://github.com/starMinK";
  const notion = "https://www.notion.so/6-21181e915241465c92495075706dbe3c";

  const facebook = "https://www.facebook.com/daangn";
  const instagram = "https://www.instagram.com/daangnmarket/";
  const youtube = "https://www.youtube.com/channel/UC8tsBsQBuF7QybxgLmStihA";
  const blog = "https://blog.naver.com/daangn";

  return (
    <StDiv footer_box>
      <div>
        <StP copy_right>copyright ©️ 10기 C반 6조</StP>
        <StDiv back_front_txt>
          <p>BackEnd</p>
          <p>FrontEnd</p>
        </StDiv>
        <StButton
          onClick={() => {
            window.open(yeol);
          }}
        >
          <BsGithub size="25" color="#868b94" />
          <StP>이승열</StP>
        </StButton>
        <StButton
          onClick={() => {
            window.open(jaeha);
          }}
        >
          <BsGithub size="25" color="#868b94" />
          <StP>최재하</StP>
        </StButton>
        <StButton
          onClick={() => {
            window.open(jongyeol);
          }}
        >
          <BsGithub size="25" color="#868b94" />
          <StP>유종열</StP>
        </StButton>
        <StButton
          onClick={() => {
            window.open(gyumin);
          }}
        >
          <BsGithub size="25" color="#868b94" />
          <StP>김규민</StP>
        </StButton>
        <StButton
          onClick={() => {
            window.open(chan);
          }}
        >
          <FiGithub size="25" color="#868b94" />
          <StP>최신영</StP>
        </StButton>
        <StButton
          onClick={() => {
            window.open(hayoung);
          }}
        >
          <FiGithub size="25" color="#868b94" />
          <StP>김하영</StP>
        </StButton>
        <StButton
          onClick={() => {
            window.open(saeyeon);
          }}
        >
          <FiGithub size="25" color="#868b94" />
          <StP>김세연</StP>
        </StButton>
        <StButton
          onClick={() => {
            window.open(notion);
          }}
        >
          <SiNotion size="25" color="#868b94" />
          <StP>6조 노션</StP>
        </StButton>
      </div>
      <div>
        <StButton
          onClick={() => {
            window.open(facebook);
          }}
        >
          <BsFacebook size="25" color="#868b94" />
        </StButton>
        <StButton
          onClick={() => {
            window.open(instagram);
          }}
        >
          <BsInstagram size="25" color="#868b94" />
        </StButton>
        <StButton
          onClick={() => {
            window.open(youtube);
          }}
        >
          <BsYoutube size="25" color="#868b94" />
        </StButton>
        <StButton
          onClick={() => {
            window.open(blog);
          }}
        >
          <SiNaver size="25" color="#868b94" />
        </StButton>
      </div>
    </StDiv>
  );
};

const StDiv = styled.div`
  ${(props) =>
    props.footer_box &&
    css`
      max-width: 1200px;
      width: 95%;
      height: 150px;
      display: flex;
      color: #868b94;
      align-items: flex-start;
      justify-content: space-between;
      font-size: 14px;
      margin: 0 auto;
      padding: 12px 16px;
    `}
  ${(props) =>
    props.back_front_txt &&
    css`
      display: flex;
      justify-content: flex-start;
      margin-left: 10px;
      gap: 130px;
    `}
`;

const StButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

const StP = styled.p`
  margin: 0;
  color: #868b94;
  ${(props) =>
    props.copy_right &&
    css`
      margin-left: 10px;
    `}
`;

export default Footer;

import styled, { css } from "styled-components";
import { BsGithub } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { SiNaver, SiNotion } from "react-icons/si";
import Button from "../button/Button";

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
        <Button
          onClick={() => {
            window.open(yeol);
          }}
        >
          <BsGithub size="25" color="#868b94" />
          <StP>이승열</StP>
        </Button>
        <Button
          onClick={() => {
            window.open(jaeha);
          }}
        >
          <BsGithub size="25" color="#868b94" />
          <StP>최재하</StP>
        </Button>
        <Button
          onClick={() => {
            window.open(jongyeol);
          }}
        >
          <BsGithub size="25" color="#868b94" />
          <StP>유종열</StP>
        </Button>
        <Button
          onClick={() => {
            window.open(gyumin);
          }}
        >
          <BsGithub size="25" color="#868b94" />
          <StP>김규민</StP>
        </Button>
        <Button
          onClick={() => {
            window.open(chan);
          }}
        >
          <FiGithub size="25" color="#868b94" />
          <StP>최신영</StP>
        </Button>
        <Button
          onClick={() => {
            window.open(hayoung);
          }}
        >
          <FiGithub size="25" color="#868b94" />
          <StP>김하영</StP>
        </Button>
        <Button
          onClick={() => {
            window.open(saeyeon);
          }}
        >
          <FiGithub size="25" color="#868b94" />
          <StP>김세연</StP>
        </Button>
        <Button
          onClick={() => {
            window.open(notion);
          }}
        >
          <SiNotion size="25" color="#868b94" />
          <StP>6조 노션</StP>
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {
            window.open(facebook);
          }}
        >
          <BsFacebook size="25" color="#868b94" />
        </Button>
        <Button
          onClick={() => {
            window.open(instagram);
          }}
        >
          <BsInstagram size="25" color="#868b94" />
        </Button>
        <Button
          onClick={() => {
            window.open(youtube);
          }}
        >
          <BsYoutube size="25" color="#868b94" />
        </Button>
        <Button
          onClick={() => {
            window.open(blog);
          }}
        >
          <SiNaver size="25" color="#868b94" />
        </Button>
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

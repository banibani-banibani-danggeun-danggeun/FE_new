// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StDiv nav_main>
      <div>
        <StSpan nav_logo onClick={() => navigate("/")}>
          <StImg
            src="https://cdn.discordapp.com/attachments/1037267111585792020/1055829632592658462/images.png"
            alt="logo"
          />
          바니바니 당근마켓
        </StSpan>
      </div>
      <StDiv nav_category>
        <StDiv cate_gory>
          <StSpan cate_txt active_txt onClick={() => navigate("/")}>
            중고거래
          </StSpan>
          <StSpan cate_txt onClick={() => navigate("/post")}>
            글쓰기
          </StSpan>
          <StSpan cate_txt onClick={() => navigate("/chat")}>
            채팅하기
          </StSpan>
        </StDiv>
        <StDiv log_sign>
          {/* <StSpan onClick={() => navigate("/login")}>로그인</StSpan> */}
          {/* 토큰이 있으면 로그아웃으로 버튼 변경(누르면 쿠키삭제) / 토큰 없으면 로그인 버튼 */}
          {!localStorage.getItem("id") ? (
            <StSpan onClick={() => navigate("/login")}>로그인</StSpan>
          ) : (
            <StSpan
              onClick={() => {
                // __postLogout();
                alert("로그아웃 되었습니다!");
                localStorage.removeItem("id");
                localStorage.removeItem("nickname");
                navigate("/login");
              }}
            >
              로그아웃
            </StSpan>
          )}
          <StSpan onClick={() => navigate("/signup")}>회원가입</StSpan>
        </StDiv>
      </StDiv>
    </StDiv>
  );
};

const StDiv = styled.div`
  ${(props) =>
    props.nav_main &&
    css`
      max-width: 1200px;
      width: 95%;
      height: 65px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      margin: 0 auto;
    `}
  ${(props) =>
    props.nav_category &&
    css`
      display: flex;
      gap: 60px;
      align-items: baseline;
    `}
  ${(props) =>
    props.cate_gory &&
    css`
      display: flex;
      gap: 30px;
    `}
  ${(props) =>
    props.log_sign &&
    css`
      display: flex;
      gap: 15px;
    `}
`;

const StSpan = styled.span`
  cursor: pointer;
  ${(props) =>
    props.nav_logo &&
    css`
      color: #f76605;
      font-size: 30px;
      font-weight: bold;
      font-family: "Jua", sans-serif;
      font-weight: 100;
      display: flex;
    `}
  ${(props) =>
    props.cate_txt &&
    css`
      font-size: 18px;
      font-weight: bold;
    `}
    ${(props) =>
    props.active_txt &&
    css`
      color: #fa6616;
    `}
`;

const StImg = styled.img`
  width: 30px;
  height: 30px;
`;

export default Header;

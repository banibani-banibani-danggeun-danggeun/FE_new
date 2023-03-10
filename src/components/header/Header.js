// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import Span from "../button/Span";
import Swal from "sweetalert2";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StDiv nav_main>
      <div>
        <Span nav_logo onClick={() => navigate("/")}>
          <StImg
            src="https://cdn.discordapp.com/attachments/1037267111585792020/1055829632592658462/images.png"
            alt="logo"
          />
          바니바니 당근마켓
        </Span>
      </div>
      <StDiv nav_category>
        <StDiv cate_gory>
          <Span cate_txt active_txt onClick={() => navigate("/")}>
            중고거래
          </Span>
          <Span cate_txt onClick={() => navigate("/post")}>
            글쓰기
          </Span>
          <Span cate_txt onClick={() => navigate("/mychat")}>
            채팅하기
          </Span>
        </StDiv>
        <StDiv log_sign>
          {/* <StSpan onClick={() => navigate("/login")}>로그인</StSpan> */}
          {/* 토큰이 있으면 로그아웃으로 버튼 변경(누르면 쿠키삭제) / 토큰 없으면 로그인 버튼 */}
          {/*  */}
          {!localStorage.getItem("id") &&
          !localStorage.getItem("Authorization") ? (
            <Span onClick={() => navigate("/login")}>로그인</Span>
          ) : (
            <Span
              onClick={() => {
                // __postLogout();
                Swal.fire("Logout", "로그아웃 되었습니다", "success");
                // alert("로그아웃 되었습니다!");
                localStorage.removeItem("id");
                localStorage.removeItem("nickname");
                localStorage.removeItem("Authorization");
                navigate("/login");
              }}
            >
              로그아웃
            </Span>
          )}
          <Span onClick={() => navigate("/signup")}>회원가입</Span>
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

const StImg = styled.img`
  width: 30px;
  height: 30px;
`;

export default Header;

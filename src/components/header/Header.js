import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StDiv>
      <StSpan onClick={() => navigate("/")}>바니바니 당근당근</StSpan>

      {/* 토큰이 있으면 로그아웃으로 버튼 변경(누르면 쿠키삭제) / 토큰 없으면 로그인 버튼 */}
      {/* {!localStorage.getItem("id") ? (
          <StSpan onClick={() => navigate("/login")}>Login</StSpan>
        ) : (
          <StSpan
            onClick={() => {
              // __postLogout();
              alert("로그아웃 되었습니다!");
              localStorage.removeItem("id");
              navigate("/login");
            }}
          >
            Logout
          </StSpan>
        )} */}
    </StDiv>
  );
};

const StDiv = styled.div`
  background-color: burlywood;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px;
  padding-right: 30px;
  padding-left: -20px;
`;

const StSpan = styled.span`
  color: black;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;

export default Header;

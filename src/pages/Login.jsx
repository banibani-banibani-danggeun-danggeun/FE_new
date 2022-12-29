import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useInput } from "../lib/utils/useInput";
import { __postLogin } from "../redux/modules/loginSlice";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [username, setUserName] = useInput();
  const [password, setPassword] = useInput();
  const navigate = useNavigate();

  // LOGIN
  const onSubmitLogin = (e) => {
    e.preventDefault();
    __postLogin({
      username,
      password,
    })
      .then((res) => {
        console.log("res: ", res);
        if (res.data.statusCode === 200) {
          Swal.fire("Success", "당근당근! 로그인 성공", "succees");
          // alert("당근당근! 로그인 성공");
        }
        // console.log(res.headers.authorization);
        localStorage.setItem("id", res.headers.authorization);
        localStorage.setItem("nickname", res.data.data);
        navigate("/");
      })
      .catch((error) =>
        Swal.fire("Error", "ID 또는 비밀번호가 다릅니다!", "error")
      );
    // .catch((error) => alert(error.response.data.msg));
  };

  return (
    <>
      <div>
        <StAddForm>
          <StRectangle>
            <StInputGroup>
              <StTitle>로그인</StTitle>
              <form onSubmit={onSubmitLogin}>
                <InputLogin>
                  <StFormLabel htmlFor="username">아이디 </StFormLabel>
                  <StAddInput
                    type="text"
                    id="username"
                    value={username}
                    onChange={setUserName}
                  />
                  <StFormLabel htmlFor="password">비밀번호</StFormLabel>
                  <StAddInput
                    type="password"
                    id="password"
                    value={password}
                    onChange={setPassword}
                  />
                </InputLogin>
                <StButton>
                  <StAddButton>로그인🥕</StAddButton>
                </StButton>
              </form>
              <StLine />
              <StA
                href="https://kauth.kakao.com/oauth/authorize?client_id=d6c5b10cf544ae8fcc0cbb0bbc530328&redirect_uri=http://banibanipj.s3-website.ap-northeast-2.amazonaws.com/api/user/kakao/callback&response_type=code"
                style={{ textDecoration: "none" }}
              >
                <StAddButton3>카카오 로그인</StAddButton3>
              </StA>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <StAddButton2>회원가입</StAddButton2>
              </Link>
            </StInputGroup>
          </StRectangle>
        </StAddForm>
      </div>
    </>
  );
};

const StTitle = styled.h3`
  margin: 0 auto;
  padding: 30px 0px 10px 0px;
  font-weight: 900px;
  color: #f0fcff;
  font-size: 28px;
`;
const StInputGroup = styled.div`
  gap: 11px;
  margin-left: 38px;

  display: grid;

  margin-bottom: 5px;
  margin-top: -10px;
`;
const StFormLabel = styled.label`
  font-size: 18px;
  font-weight: 600;
  margin: 0 auto;
  padding: 13px;
  color: #eafaf8;
`;
const StAddForm = styled.div`
  position: relative;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.205);
  width: 300px;
  border-radius: 20px;
  display: grid;
  padding: 30px;
  gap: 0px;
`;

const StAddInput = styled.input`
  height: 50px;
  width: 200px;

  border: none;
  border-radius: 10px;
  padding: 0 12px;
  font-size: 18px;
  &:hover {
    background: #ff8c00;
  }
  &:focus {
    outline: medium solid #ff8c00;
  }
`;

const StButton = styled.div`
  margin-top: 16px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  margin: 0 auto;

  justify-content: center;
  display: block;
  cursor: pointer;
  border-radius: 10px;
  background-color: #ff8c00;
  padding-left: 20px;
  width: 150px;
  color: #ffffff;

  font-weight: 600;
  font-size: 17px;
  &:hover {
    font-weight: 600;
    transform: scale(1.1);
  }
`;

const StAddButton2 = styled.button`
  border: none;
  height: 35px;

  margin: 0 auto;
  justify-content: center;
  display: block;
  cursor: pointer;
  border-radius: 8px;
  background-color: white;
  width: 150px;

  color: #ff8c00;
  font-weight: 600;
  font-size: 14px;
  &:hover {
    font-weight: 600;
    transform: scale(1.1);
    outline: 3px solid #ff8c00;
  }
`;

const StAddButton3 = styled.button`
  border: none;
  height: 35px;

  margin: 0 auto;
  justify-content: center;
  display: block;
  cursor: pointer;
  border-radius: 8px;
  background-color: #fee500;
  width: 150px;
  color: #000000;
  font-weight: 600;
  font-size: 14px;
  &:hover {
    font-weight: 600;
    transform: scale(1.1);
    outline: 3px solid #fee500;
  }
`;

const InputLogin = styled.div`
  display: grid;
  justify-content: center;
`;

const StLine = styled.hr`
  width: 120px;
  height: 2px;
  margin: 0 auto;
  background-color: #e38f27;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 50px;
`;

const StRectangle = styled.div`
  width: 190px;
`;

const StA = styled.a``;

export default Login;

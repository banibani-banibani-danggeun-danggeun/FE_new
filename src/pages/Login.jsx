import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useInput } from "../lib/utils/useInput";
import { __postLogin } from "../redux/modules/loginSlice";
import { Link } from "react-router-dom";

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
          alert("당근당근! 로그인 성공");
        }
        console.log(res.headers.authorization);
        localStorage.setItem("id", res.headers.authorization);
        navigate("/");
      })
      .catch((error) => alert("ID 또는 비밀번호가 틀립니다"));
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
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <StAddButton3>카카오 로그인</StAddButton3>
              </Link>
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
  padding: 20px 0px 10px 0px;
  font-weight: 900px;
  color: #f0fcff;
  font-size: 28px;
`;
const StInputGroup = styled.div`
  gap: 10px;
  display: grid;

  margin-bottom: 5px;
  margin-top: -10px;
`;
const StFormLabel = styled.label`
  font-size: 17px;
  font-weight: 600;
  margin: 0 auto;
  padding: 10px;
  color: #eafaf8;
`;
const StAddForm = styled.div`
  position: relative;
  height: 39 0px;
  background-color: rgba(0, 0, 0, 0.205);
  width: 227px;
  border-radius: 20px;
  display: grid;
  padding: 30px;
  gap: 0px;
`;

const StAddInput = styled.input`
  height: 40px;
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
  height: 35px;
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
  height: 30px;

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
  height: 30px;

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
  border-radius: 50px;
`;

const StRectangle = styled.div`
  width: 190px;
`;

export default Login;

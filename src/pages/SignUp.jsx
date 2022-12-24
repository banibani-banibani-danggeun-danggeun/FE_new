import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useInput } from "../lib/utils/useInput";
import { __postSignup, __checkUserName } from "../redux/modules/loginSlice";

const SignUp = () => {
  const [username, setUserName] = useInput();
  const [password, setPassword] = useInput();
  const [passwordCheck, setPasswordCheck] = useInput();

  const navigate = useNavigate();

  const onSubmitSignup = (e) => {
    e.preventDefault();
    __postSignup({
      username,
      password,
      passwordCheck,
    })
      .then((res) => {
        // console.log("signup res: ", res);
        // alert(res.data.msg);
        // localStorage.setItem("id", res.headers.authorization);
        navigate("/login");
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  // id 중복 체크 확인
  const onCheckUserName = (username) => {
    console.log("username---->", username);
    __checkUserName(username).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div>
        <StAddForm>
          <StRectangle>
            <StInputGroup>
              <StTitle>회원가입</StTitle>
              <form onSubmit={onSubmitSignup}>
                <InputLogin>
                  <StFormLabel htmlFor="username">아이디 </StFormLabel>
                  <StDiv checkid>
                    <StAddInput
                      type="text"
                      id="username"
                      value={username}
                      onChange={setUserName}
                      placeholder="아이디를 입력하세요"
                    />

                    <StButton
                      checkbtn
                      onClick={() => {
                        onCheckUserName(username);
                      }}
                      type="button"
                    >
                      중복확인
                    </StButton>
                  </StDiv>
                  <StFormLabel htmlFor="password">비밀번호</StFormLabel>
                  <StAddInput
                    type="password"
                    id="password"
                    value={password}
                    onChange={setPassword}
                    placeholder="비밀번호를 입력하세요"
                  />
                  <StFormLabel htmlFor="passwordCheck">
                    비밀번호 확인
                  </StFormLabel>
                  <StAddInput
                    type="password"
                    id="passwordCheck"
                    value={passwordCheck}
                    onChange={setPasswordCheck}
                    placeholder="비밀번호를 다시 입력하세요"
                  />
                </InputLogin>

                <StAddButton>회원가입🥕</StAddButton>
                <StLine />
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <StAddButton2>로그인</StAddButton2>
                </Link>
              </form>
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
  gap: 10px;
  display: grid;

  margin-bottom: 5px;
  margin-top: -10px;
`;
const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 580;
  margin: 0 auto;
  padding: 6px;
  color: #f0fcff;
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
  width: 210px;

  border: none;
  border-radius: 10px;
  padding: 0px 0px 0px 11px;
  font-size: 13px;
  &:hover {
    background: #ff8c00;
  }
  &:focus {
    outline: medium solid #ff8c00;
  }
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
  width: 150px;
  color: #ffffff;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 20px;
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
  margin-top: 10px;
  font-size: 14px;
  &:hover {
    font-weight: 600;
    transform: scale(1.1);
    outline: 3px solid #ff8c00;
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

const StRectangle = styled.div``;

const StDiv = styled.label`
  position: relative;
`;

const StButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 5px;
  border: none;
  font-size: 12px;
  color: #484a48;
  cursor: pointer;
  &:hover {
    background: #ff8c00;
  }
`;

export default SignUp;

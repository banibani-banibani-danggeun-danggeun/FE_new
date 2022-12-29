import axios from "axios";

export const kakaoLogin = (code) => {
  return function () {
    axios({
      method: "GET",
      url: `http://jong-10.shop/api/user/kakao/callback?code=${code}`,
    })
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임

        const ACCESS_TOKEN = res.data.accessToken;

        localStorage.setItem("token", ACCESS_TOKEN); //예시로 로컬에 저장함

        window.location.replace("/"); // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
        window.location.replace("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  };
};

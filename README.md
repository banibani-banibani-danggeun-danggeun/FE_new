![waving](https://capsule-render.vercel.app/api?type=waving&height=200&text=🥕바니%20바니%20당근%20마켓&fontSize=50&fontAlign=50&color=gradient&animation=fadeIn&fontColor=F49F5B)

# 바니바니 당근 마켓(Front-End) README

> **당근 마켓 클론 코딩 프로젝트**  
> 바니바니 당근마켓. 중고 거래, 이웃과 함께해요. 가깝고 따뜻한 당신의 근처를 만들어요.

- [[Notion: 바니바니당근 프로젝트 정보]](https://royal-storm-069.notion.site/6-21181e915241465c92495075706dbe3c)
- [[프로젝트 시연영상 보러가기]](https://www.youtube.com/watch?v=5vryOylmYbc)
- [[Front-End Repository]](https://github.com/banibani-banibani-danggeun-danggeun/FE_new)

## 📆 개발 기간

2022년 12월 23일 ~ 2022년 12월 29일

<p>

## 👥 팀 소개

#### `Frontend`

<a href="https://github.com/JIEUN24" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=React&message=최신영 &color=61dafb&style=for-the-badge&>"/></a>
<a href="https://github.com/GYMMX" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=React&message=김세연 &color=61dafb&style=for-the-badge&>"/></a>
<a href="https://github.com/GYMMX" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=React&message=김하영 &color=61dafb&style=for-the-badge&>"/></a>

#### `Backend`

<a href="https://github.com/ksanacloud" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=Spring&message=김규민 &color=08CE5D&style=for-the-badge&>"/></a>
<a href="https://github.com/EunheaSong" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=Spring&message=유종열 &color=08CE5D&style=for-the-badge&>"/></a>
<a href="https://github.com/hyun-woong" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=Spring&message=이승열 &color=08CE5D&style=for-the-badge&>"/></a>
<a href="https://github.com/hyun-woong" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=Spring&message=최재하 &color=08CE5D&style=for-the-badge&>"/></a>

## 🛠️ 기술 스택

|   종류   |                                                                                                                                                                         기술                                                                                                                                                                          |
| :------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Language |                                                                                                               <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=flat&for-the-badge&logo=javascript&logoColor=black"/>                                                                                                               |
| Language |                                                                                                                     <img src="https://img.shields.io/badge/CSS3-1572B6.svg?&style=flat&for-the-badge&logo=CSS3&logoColor=white"/>                                                                                                                     |
| Language |                                                                                                                    <img src="https://img.shields.io/badge/HTML5-E34F26.svg?&style=flat&for-the-badge&logo=HTML5&logoColor=white"/>                                                                                                                    |
|  stack   | <img src="https://img.shields.io/badge/Axios-5A29E4.svg?&style=flat&for-the-badge&logo=Axios&logoColor=white"/><br><img src="https://img.shields.io/badge/React-61DAFB.svg?&style=flat&for-the-badge&logo=React&logoColor=black"/><br><img src="https://img.shields.io/badge/Redux-764ABC.svg?&style=flat&for-the-badge&logo=Redux&logoColor=black"/> |

## 📌 API 명세서 (노션 페이지에서 선명하게 조회 가능)

<img width="800" alt="api1" src="https://blog.kakaocdn.net/dn/bYcpJq/btrUViSu5V3/RLAlJCsvfkKqYZk5izKQL0/img.png">  
<img width="800" alt="api2" src="https://blog.kakaocdn.net/dn/bQMZMc/btrUV4NhRnu/bVkcjh31Tv5V0VHYe8RXx1/img.png">  
<img width="800" alt="api3" src="https://blog.kakaocdn.net/dn/EzZHZ/btrUTJbNH97/Ry7iBWzelmvDX3U8rUxmC1/img.png">  
<img width="800" alt="api3" src="https://blog.kakaocdn.net/dn/EifTa/btrUVbFUujz/8KdMujorfyUhy87XI5i3x1/img.png">

## 📏 와이어프레임

![와이어프레임](https://cdn.discordapp.com/attachments/1037267111585792020/1055867403344543754/IMB_XZKGyK.gif)

## 🗺 ERD

<img width="800" alt="메인페이지2" src="https://blog.kakaocdn.net/dn/bxKbco/btrUWSToS9W/vQC2owz9mExVJ6mb75lXpK/img.png">

## 🧩아키텍쳐

<img width="800" alt="메인페이지2" src="https://blog.kakaocdn.net/dn/cS7FBF/btrUWSMGcgH/9BG4uAl61xtSXhPKCTtPF1/img.png">

## 💡 Trouble Shooting

1. 채팅 에러

- socket connecting하는 작업이 오래 걸렸고 endpoint에서 http://주소가 적혀 있지 않아서 연결하면서 http://localhost:3000/ws-stomp로 이상한 주소를 계속 요청했다
- 그래서 주소를 변경해주었더니 연결이 되어서 기본적인 메세지 불러오기, 메시지 전송은 가능하지만 채팅했을 때 렌더링이 안되는 부분이 있어서 아직 해결은 되지 않았습니다
- 그리고 채팅기능에 대한 디테일한 부분이 진행되지 않아서 그부분은 이후에 해결해보려고 합니다
  <br>

2. 무한스크롤 기능 실행 시 똑같은 데이터들이 중복으로 렌더링 되었습니다 -> useRef을 사용하여 false로 바꿔주는 코드를 추가하였다
   <br>
3. 삭제할 때 삭제는 되는데 화면에서 바로 사라지지 않고 새로고침을 해야만 사라진다
   수정할 때 수정하면 바로 수정이 될 때도 있고 새로고침을 해야 화면에서 바뀔 때도 있고 아예 값이 undefined가 나올 때도 있다

- 무한스크롤 때문에 렌더링 이슈가 있는 것 같다

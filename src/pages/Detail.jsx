import styled from "styled-components";

const Detail = () => {
  return (
    <div>
      <Wrap>
        <Imgarea src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMDZfMjYx%2FMDAxNDgzNjkyMzU1NDA1.vOAssOnraxfU0SWcADvqBbNNyMLYKPQ6mSf_2yWUULEg.ya9t6FPSXdGJDbONkWSPI7pfnssDFkmGDlYFmPd3id8g.JPEG.luric%2FIMG_3408.JPG&type=a340" />
        <Wraps>
          <Div>
            <Nickimg src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-c649f052a34ebc4eee35048815d8e4f73061bf74552558bb70e07133f25524f9.png" />
            <Nickname>
              <p>파라밤</p>
            </Nickname>
            <Address>북구 농소3동</Address>
          </Div>
          <Buttons>
            <Rewritebtn>수정</Rewritebtn>
            <Deletebtn>삭제</Deletebtn>
          </Buttons>
        </Wraps>
        <Content>
          <Wraping>
            <Contents>
              <Name>시계 팝니다.</Name>
              <Category>액세서리 / 6일전</Category>
              <Price>30,000원</Price>
              <Explain>
                깨끗합니다. 구매 후 1년동안 두번 착용했습니다. 네고 받지
                않습니다!
              </Explain>
              <Etc>관심3 / 채팅19 / 조회 200</Etc>
            </Contents>
          </Wraping>
        </Content>
        <Cardsbtn>
          <Cardstitle>🥕당근마켓 인기중고</Cardstitle>
          <Morecontent>더 구경하기</Morecontent>
        </Cardsbtn>
        <Wrapcards>
          <Etccards>
            <Cardimgarea src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMDZfMjYx%2FMDAxNDgzNjkyMzU1NDA1.vOAssOnraxfU0SWcADvqBbNNyMLYKPQ6mSf_2yWUULEg.ya9t6FPSXdGJDbONkWSPI7pfnssDFkmGDlYFmPd3id8g.JPEG.luric%2FIMG_3408.JPG&type=a340" />
            <Etctextwrap>
              <Cardtitle>시계</Cardtitle>
              <Cardprice>50,000원</Cardprice>
              <Cardaddress>영등포구 대림제2동</Cardaddress>
              <Cardetc>관심7 / 채팅16</Cardetc>
            </Etctextwrap>
          </Etccards>
          <Etccards>
            <Cardimgarea src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMDZfMjYx%2FMDAxNDgzNjkyMzU1NDA1.vOAssOnraxfU0SWcADvqBbNNyMLYKPQ6mSf_2yWUULEg.ya9t6FPSXdGJDbONkWSPI7pfnssDFkmGDlYFmPd3id8g.JPEG.luric%2FIMG_3408.JPG&type=a340" />
            <Etctextwrap>
              <Cardtitle>시계</Cardtitle>
              <Cardprice>50,000원</Cardprice>
              <Cardaddress>영등포구 대림제2동</Cardaddress>
              <Cardetc>관심7 / 채팅16</Cardetc>
            </Etctextwrap>
          </Etccards>
          <Etccards>
            <Cardimgarea src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAxMDZfMjYx%2FMDAxNDgzNjkyMzU1NDA1.vOAssOnraxfU0SWcADvqBbNNyMLYKPQ6mSf_2yWUULEg.ya9t6FPSXdGJDbONkWSPI7pfnssDFkmGDlYFmPd3id8g.JPEG.luric%2FIMG_3408.JPG&type=a340" />
            <Etctextwrap>
              <Cardtitle>시계</Cardtitle>
              <Cardprice>50,000원</Cardprice>
              <Cardaddress>영등포구 대림제2동</Cardaddress>
              <Cardetc>관심7 / 채팅16</Cardetc>
            </Etctextwrap>
          </Etccards>
        </Wrapcards>
      </Wrap>
    </div>
  );
};

const Wrap = styled.div`
  /* height: 1100px; */
  width: 900px;
  min-width: 100%;
  position: relative;
  display: block;
  overflow: clip;
  /* border: 1px solid red; */
  margin-top: 20px;
`;
const Imgarea = styled.img`
  width: 900px;
  height: 650px;
  /* border: 1px solid green; */
  border-radius: 15px;
`;
const Nickimg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 10px;
`;
const Nickname = styled.div`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.6px;
  line-height: 22.5px;
  &:hover {
    text-decoration: underline solid rgb(33, 37, 41);
  }

  word-spacing: 0px;
  height: 22.5px;
  width: 71.375px;
  display: block;
  cursor: pointer;
  margin-left: 10px;
`;
const Address = styled.p`
  /* margin-top: 19px; */
`;
const Div = styled.div`
  display: flex;
`;
const Wraps = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  height: 100px;
  border-bottom: 2px solid rgb(193, 195, 196);
`;
const Rewritebtn = styled.button`
  margin-right: 5px;
  border: none;
  background-color: transparent;
  /* text-decoration: underline solid rgb(33, 37, 41); */
  font-size: 17px;
  cursor: pointer;
`;
const Deletebtn = styled.button`
  margin-right: 5px;
  border: none;
  background-color: transparent;
  /* text-decoration: underline solid rgb(33, 37, 41); */
  font-size: 17px;
  cursor: pointer;
`;
const Buttons = styled.div`
  margin-top: 12px;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;
const Wraping = styled.div`
  width: 900px;
  border-bottom: 2px solid rgb(193, 195, 196);
  margin-bottom: 10px;
`;
const Contents = styled.div`
  width: 880px;
  height: 300px;
  /* border: 1px solid green; */
  margin-top: 2px;
`;
const Name = styled.p`
  font-size: 25px;
  font-weight: bold;
`;
const Category = styled.p`
  color: grey;
  font-size: 17px;
`;
const Price = styled.p`
  font-size: 25px;
  font-weight: bold;
`;
const Explain = styled.p`
  font-size: 20px;
`;
const Etc = styled.p`
  color: grey;
  font-size: 17px;
`;
const Cardstitle = styled.div`
  font-size: 25px;
  font-weight: bold;
`;
const Morecontent = styled.div`
  font-size: 22px;
  color: rgb(240, 149, 30);
  cursor: pointer;
`;
const Cardsbtn = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  margin-bottom: 35px;
`;
const Wrapcards = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin-bottom: 20px;
`;
const Etccards = styled.div`
  /* border: 1px solid red; */
  width: 280px;
  height: 430px;
`;
const Cardimgarea = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 15px;
`;
const Cardtitle = styled.div`
  font-size: 22px;
  margin-bottom: 5px;
`;
const Cardprice = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const Cardaddress = styled.div`
  font-size: 17px;
  margin-bottom: 20px;
`;
const Cardetc = styled.div`
  font-size: 15px;
  color: grey;
`;
const Etctextwrap = styled.div`
  width: 245px;
  height: 120px;
  /* border: 1px solid green; */
  margin: auto;
`;

export default Detail;

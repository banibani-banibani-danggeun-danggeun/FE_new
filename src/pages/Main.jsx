import axios from "axios";
import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PostingBlock from "../components/main/PostingBlock";

const Main = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(1);
  const preventRef = useRef(true);
  const obsRef = useRef(null);

  useEffect(() => {
    getList();
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    getList();
  }, [page]);

  const obsHandler = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setPage((prev) => prev + 1);
    }
  };

  const getList = useCallback(async () => {
    setLoad(true);
    const res = await axios({
      method: "GET",
      url: `http://api.jaeha.shop/api/post`,
    });
    if (res.data) {
      setList((prev) => [...new Set([...prev, ...res.data])]); //리스트 추가
      preventRef.current = true;
    } else {
      console.log(res);
    }
    setLoad(false);
  }, [page]);

  return (
    <>
      <StPopularDiv>
        <Wrapper>
          <StMainTitle>중고거래 인기매물</StMainTitle>
          <div className="postlist">
            {list && (
              <>
                {list?.map((post) => {
                  return (
                    <StCardsWrap key={post.id}>
                      <Link to={`/detail/${post.id}`} className="detail">
                        <div className="card-photo">
                          <img src={post.image} alt="item" />
                        </div>
                        <div className="card-desc">
                          <h2 className="card-title">{post.title}</h2>
                          <div className="card-price">{post.price}원</div>
                          <div className="card-region">{post.location}</div>
                          <div className="card-region">{post.nickname}</div>
                          <div className="card-counts">
                            <span>관심 10</span>
                            <span>채팅 3</span>
                          </div>
                        </div>
                      </Link>
                    </StCardsWrap>
                  );
                })}
              </>
            )}
            {load ? <div> 당근당근! 로딩 중</div> : <></>}
            <div ref={obsRef}></div>
          </div>
        </Wrapper>
      </StPopularDiv>
    </>
  );
};

const StPopularDiv = styled.div`
  padding-top: 50px;
  padding-bottom: 60px;
`;

const Wrapper = styled(PostingBlock)`
  width: 980px;
  .postlist {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const StMainTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 39px;
  font-weight: 550;
  padding-bottom: 60px;
`;

const StCardsWrap = styled.div`
  margin-bottom: 40px;
  .detail {
    display: flex;
    flex-direction: column;
    width: 211px;
    border-radius: 8px;
    color: black;
    text-decoration: none;

    .card-photo {
      display: flex;
      align-items: center;
      height: 212px;
      overflow: hidden;
      border: 1px solid transparent;
      border-radius: 12px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .card-desc {
      margin: 0px 4px 0;
      .card-title {
        font-size: 16px;
        font-weight: normal;
        letter-spacing: -0.02px;
        line-height: 1.5;
        margin-bottom: 9px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .card-region {
        font-size: 13px;
        color: #212529;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 4px;
        line-height: 1.5;
      }
      .card-price {
        font-size: 15px;
        font-weight: 700;
        line-height: 1.5;
        margin-bottom: 4px;
      }
      .card-counts {
        font-size: 13px;
        color: #868e96;
        span + span::before {
          content: " ∙ ";
        }
      }
    }
  }
`;
export default Main;

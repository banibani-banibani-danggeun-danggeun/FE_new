import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getList } from "../redux/modules/mainSlice";
import React from "react";
import styled from "styled-components";
import PostingBlock from "../components/main/PostingBlock";
import Posting from "../components/main/Posting";

const Main = () => {
  const { isLoading, error, posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  //const posts = useSelector((state) => state.posts.posts);
  // console.log("posts ---> ", posts);

  useEffect(() => {
    dispatch(__getList());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <StPopularDiv>
      <Wrapper>
        <StMainTitle>중고거래 인기매물</StMainTitle>
        <div className="postlist">
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
          <Posting />
        </div>
      </Wrapper>
    </StPopularDiv>
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

export default Main;

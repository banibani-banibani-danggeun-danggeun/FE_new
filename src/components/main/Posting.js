import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Posting = () => {
  return (
    <StCardsWrap>
      <Link to="/detail/:id" className="detail">
        <div className="card-photo">
          <img
            src="https://64.media.tumblr.com/9674caf98dace71ffe89d6085aac6ca7/5043146d4c562c78-b2/s540x810/17fb1dd4869eca41786d88082965d150db685eab.jpg"
            alt="item"
          />
        </div>
        <div className="card-desc">
          <h2 className="card-title">y2k 모토로라 레이저</h2>
          <div className="card-price">30,000원</div>
          <div className="card-region">서울 서초구 서초1동</div>
          <div className="card-counts">
            <span>관심 10</span>
            <span>채팅 3</span>
          </div>
        </div>
      </Link>
    </StCardsWrap>
  );
};

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

export default Posting;

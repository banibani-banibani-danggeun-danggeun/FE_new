import React from "react";
import styled from "styled-components";

const StPostingBlock = styled.div`
  width: 980px;
  margin: 0 auto;
`;

const PostingBlock = ({ children, ...rest }) => {
  return <StPostingBlock {...rest}>{children}</StPostingBlock>;
};

export default PostingBlock;

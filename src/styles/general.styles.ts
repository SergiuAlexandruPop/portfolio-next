"use client";

import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10%;
  width: 80%;

  @media screen and (max-width: 600px) {
    margin: 0;
    width: 100%;
  }
`;

"use client";

import styled from "styled-components";
import Link from "next/link";

export const MainBlogPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20rem 30rem 0 30rem;

  @media screen and (max-width: 1200px) {
    margin: 6rem 2rem 0 2rem;
  }
`;

export const PostAndDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 2px -2px gray;
`;

export const DateContainer = styled.p`
  margin: 3rem;

  @media screen and (max-width: 1200px) {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 4rem 0 0 0;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.9rem;
    font-weight: 500;
    margin: 4rem 0 0 0;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
    font-weight: 500;
    margin: 4rem 0 0 0;
  }
`;

export const PostsContainer = styled(Link)`
  font-size: 2.5rem;
  margin: 3rem;
  font-weight: 500;
  align-self: start;
  opacity: 0.7;

  :hover {
    color: #6558ad;
    opacity: 1;
  }

  @media screen and (max-width: 1200px) {
    font-size: 3rem;
    font-weight: 500;
    margin: 4rem 0 0 0;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.9rem;
    font-weight: 500;
    margin: 4rem 0 0 0;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.6rem;
    font-weight: 500;
    margin: 4rem 0 0 0;
  }
`;

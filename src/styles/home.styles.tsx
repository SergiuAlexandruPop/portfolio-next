import styled, { css } from "styled-components";
import Link from "next/link";

// Divider Container
export const DividerContainer = styled.div`
  width: 60%;
  justify-self: center;

  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;

// Icon Container Styles
const IconContainerStyles = css`
  margin-top: 2rem;

  & svg {
    font-size: 4rem;
    color: #8b80c6;
    transition: all 0.3s ease;
    opacity: 0.65;

    &:hover {
      color: #8b80c6;
      opacity: 1;
    }
  }
`;

// Containers
export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  opacity: 0.9;
  margin-top: 4rem;

  @media only screen and (max-width: 320px) {
    margin-top: 0;
  }
`;

export const FirstNameContainer = styled.h1`
  color: #7e72c0;
  font-size: 3.5rem;

  @media only screen and (max-width: 320px) {
    margin: 0;
  }
`;

export const LastNameContainer = styled.h1`
  color: #ffa501;
  font-size: 3.5rem;

  @media only screen and (max-width: 320px) {
    margin: 0;
  }
`;

export const ProfessionName = styled.h1`
  color: #6558ad;
  font-size: 3rem;
  opacity: 0.9;
  margin: 0 1rem;

  @media screen and (max-width: 320px) {
    margin: 1rem 0 0 0;
    font-size: 2rem;
  }
`;

// Rocket Animation
export const RocketContainer = css`
  animation: shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  animation-delay: -0.1s;
  animation-duration: 1.5s;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;

  @keyframes shake {
    0%, 90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }
    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }
    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;

export const RocketHomeContainer = styled.div`
  ${RocketContainer};
  width: 30rem;
  height: auto;
  img {
    width: 100%;
    height: auto;
  }
`;

// Footer and Icons
export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  gap: 3rem;

  @media screen and (max-width: 500px) {
    gap: 1.3rem;
  }
`;

export const IconContainer = styled(Link)`
  ${IconContainerStyles};
`;

export const IconContainerA = styled.a`
  ${IconContainerStyles};
`;

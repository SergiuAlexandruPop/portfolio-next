import styled from "styled-components";

export const ResumeContainer = styled.div`
  width: 80%;
  margin: 3rem auto 0 auto;
  display: flex;
    flex-direction: column;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 95%;
  }
`;

export const DownloadLink = styled.a`
  display: flex;
  align-items: center;
  margin: 3rem auto 0 auto;
  font-size: 1.65rem;
  width: 20rem;
  height: 4.5rem;
  cursor: pointer;
  background: linear-gradient(to bottom, #7e72c052 7%, #7e72c0d3 75%, #7e72c0);
  border-radius: 3.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  align-self: center;
  font-family: "Open Sans Condensed", sans-serif;
  justify-content: center;
  opacity: 0.8;
  border: none;
  color: white;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }

  &:focus {
    transform: scale(1.05);
  }

  @media screen and (max-width: 500px) {
    width: 15rem;
    margin: 0 auto;
  }
`;

export const Blockquote = styled.blockquote`
  padding: 15px 24px;
  border-left: 5px solid #ffe564;
  background-color: rgba(255, 229, 100, 0.2);
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 1.65rem;
  margin-top: 6rem;

  @media screen and (max-width: 500px) {
    margin-top: 4rem;
    margin-bottom: 0.7rem;
  }
`;

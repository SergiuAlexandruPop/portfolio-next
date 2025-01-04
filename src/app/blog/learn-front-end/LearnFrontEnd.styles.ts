"use client";

import styled from "styled-components";
import Link from "next/link";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin: 8rem auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background-color: #ffffff;
  padding: 2rem;

  @media screen and (max-width: 1000px) {
    width: 90%;
    margin: 6rem auto;
    box-shadow: none;
    padding: 1.5rem;
  }
`;

export const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  p {
    font-size: 1.6rem;
    font-weight: 400;
    margin: 0.8rem 0;
    line-height: 1.8;
    color: #343a40; /* Modern dark gray */
    letter-spacing: 0.5px;
    font-family: "Inter", sans-serif;
  }
`;

export const ImportantSideNote = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  border-left: 4px solid #ff6b6b; /* Accent red for emphasis */
  background-color: #fff5f5; /* Light red background */
  color: #d64045; /* Darker red text */
  font-size: 1.8rem;
  line-height: 1.8;
  border-radius: 6px;
  font-family: "Inter", sans-serif;
`;

export const Divider = styled.hr`
  width: 100%;
  border: 0;
  height: 1px;
  background: #dee2e6; /* Light gray for separation */
  margin: 2rem 0;
`;

export const ListContainer = styled.li`
  font-size: 1.6rem;
  font-weight: 400;
  margin: 0.8rem 0;
  line-height: 1.8;
  color: #495057; /* Subtle dark gray */
  letter-spacing: 0.4px;
  font-family: "Inter", sans-serif;

  ::marker {
    color: #4dabf7; /* Modern blue for list markers */
    font-size: 1.4rem;
  }
`;

export const VideoContainer = styled.iframe`
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16 / 9;
  align-self: center;
  margin: 2rem 0;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 1000px) {
    width: 100%;
    max-width: 600px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ResourceTitle = styled(Link)`
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 1.6;
  letter-spacing: 0.5px;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  color: #1c7ed6; /* Modern blue link color */

  :hover {
    color: #228be6; /* Slightly brighter blue on hover */
    text-decoration: underline;
  }
`;

export const GeneralLink = styled(Link)`
  font-size: 1.7rem;
  line-height: 1.6;
  color: #6558ad; /* Subtle purple */
  letter-spacing: 0.4px;
  text-decoration: underline;
  font-family: "Inter", sans-serif;

  :hover {
    color: #7e5eab; /* Brighter purple on hover */
  }
`;

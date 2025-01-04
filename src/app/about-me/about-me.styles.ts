import styled from "styled-components";

export const AboutMeBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;

export const ProfilePictureContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 32rem;
  height: 32rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5%;
  margin-bottom: 3rem;
`;

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 70%;

  @media screen and (max-width: 425px) {
    width: 95%;
  }
`;

export const AboutParagraphContainer = styled.p`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 2.5rem;
  padding: 2rem;
  border-bottom: 0.5px solid #ebebeb;

  &:last-child {
    border: none;
  }
`;

export const ParagraphPictureContainer = styled.div`
  margin-top: 0.5rem;
  width: 22rem;
  height: auto;
  align-self: center;
  border-radius: 2rem;
  overflow: hidden;
`;

export const CoursesCollectionContainer = styled.li`
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CourseLinkContainer = styled.a`
  font-weight: 400;
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    color: #7e72c0;
  }
`;

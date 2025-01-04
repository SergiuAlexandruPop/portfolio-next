"use client";

import React, { useState } from "react";
import Image from "next/image";
import COURSES_DATA from "./courses.data";
import {
    AboutParagraphContainer,
    AboutMeContainer,
    ProfilePictureContainer,
    AboutMeBodyContainer,
    ParagraphPictureContainer,
    CourseLinkContainer,
    CoursesCollectionContainer,
} from "./about-me.styles";

const AboutMe = () => {
    const [coursesData] = useState(COURSES_DATA);

    return (
        <AboutMeBodyContainer>
            <ProfilePictureContainer>
                <Image
                    src="/assets/images/Profilepic.jpg"
                    alt="Selfie"
                    width={320}
                    height={320}
                />
            </ProfilePictureContainer>
            <AboutMeContainer>
                <AboutParagraphContainer>
          <span style={{ fontWeight: "bold", color: "#7e72c0" }}>
            Just your usual story.
          </span>
                    <br />
                    A guy found out he doesn't like what he's doing, gave up on the
                    medical career, and started learning code when he had 0 knowledge.
                    Spammed out the old IT friends from high school for advice and then
                    took a deep dive on Udemy (9 courses). Then I took the turtle's plan
                    from "The Rabbit and the Turtle" story, and here we are.
                </AboutParagraphContainer>
                <ParagraphPictureContainer>
                    <Image
                        src="/assets/images/turtle.jpg"
                        alt="The Rabbit and the Turtle picture"
                        width={220}
                        height={220}
                    />
                </ParagraphPictureContainer>

                <AboutParagraphContainer>
          <span style={{ fontWeight: "bold", color: "#7e72c0" }}>
            Here is a list with links of all the courses that I took from last
            to first:
          </span>
                </AboutParagraphContainer>
                <ul>
                    {coursesData.map(({ name, url, id }) => (
                        <CoursesCollectionContainer key={id}>
                            <CourseLinkContainer href={url} target="_blank">
                                {name}
                            </CourseLinkContainer>
                        </CoursesCollectionContainer>
                    ))}
                </ul>
            </AboutMeContainer>
        </AboutMeBodyContainer>
    );
};

export default AboutMe;

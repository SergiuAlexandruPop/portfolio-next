"use client";

import React from "react";
import Image from "next/image";
import {
    Blockquote,
    DownloadLink,
    ResumeContainer,
} from "./resume.styles";

const Resume = () => {
    return (
        <>
            <Blockquote>
                ⚠️ For clickable links, download the PDF version
            </Blockquote>
            <DownloadLink
                href="/assets/resume.pdf"
                target="_blank"
                download="Sergiu's Resume"
            >
                Download résumé
            </DownloadLink>
            <ResumeContainer>
                <Image
                    src="/assets/images/resume1.jpg"
                    alt="resume"
                    width={800}
                    height={1000}
                />
                <div style={{marginTop: '-9rem'}}>
                    <Image
                        src="/assets/images/resume2.jpg"
                        alt="resume"
                        width={800}
                        height={1000}
                    />
                </div>
                <div style={{marginTop: '-9.3rem'}}>
                    <Image
                        src="/assets/images/resume3.jpg"
                        alt="resume"
                        width={800}
                        height={1000}
                    />
                </div>
            </ResumeContainer>
        </>
);
};

export default Resume;

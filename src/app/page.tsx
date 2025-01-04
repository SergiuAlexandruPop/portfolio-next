"use client";
//replace styled-component and MUI icons with tailwind to remove use client

import React from "react";
import rocket from "../../public/assets/gifs/rocket.gif";
import {
    HomePageContainer,
    NameContainer,
    FirstNameContainer,
    LastNameContainer,
    ProfessionName,
    FooterContainer,
    IconContainer,
    IconContainerA,
    DividerContainer,
    RocketHomeContainer,
} from "@/styles/home.styles";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";

const useStyles = () => ({
    tooltip: {
        fontSize: "1.8rem",
        backgroundColor: "#fff",
        color: "#8B80C6",
        transition: "all 0.3s ease",
        opacity: "0.9",
    },
});

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
    const classes = useStyles();

    return (
        <HomePageContainer>
            <NameContainer>
                <FirstNameContainer>Sergiu</FirstNameContainer>{" "}
                <LastNameContainer>Pop</LastNameContainer>
            </NameContainer>
            <ProfessionName>Software Developer</ProfessionName>
            <RocketHomeContainer src={rocket} alt="RocketGif" width={200} height={200} />

            <DividerContainer>
                <Divider />
            </DividerContainer>

            <FooterContainer>
                <IconContainer href="https://www.linkedin.com/in/sergiualexandrupop/" target="_blank">
                    <LinkedInIcon />
                </IconContainer>
                <IconContainer href="https://github.com/SergiuAlexandruPop" target="_blank">
                    <GitHubIcon />
                </IconContainer>
                <Tooltip title="sergiualexandrupop@gmail.com" componentsProps={{ tooltip: { sx: classes.tooltip } }}>
                    <IconContainerA href="mailto:sergiualexandrupop@gmail.com">
                        <MailIcon />
                    </IconContainerA>
                </Tooltip>
                <IconContainer href="https://www.facebook.com/PopSergiuu" target="_blank">
                    <FacebookIcon />
                </IconContainer>
                <IconContainer href="https://www.instagram.com/popsergiuu/" target="_blank">
                    <InstagramIcon />
                </IconContainer>
            </FooterContainer>
        </HomePageContainer>
    );
};

export default HomePage;

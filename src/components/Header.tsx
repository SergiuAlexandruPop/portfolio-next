"use client";

import React from "react";
import { OptionsContainer, OptionLink } from "../styles/header.styles";

const Header = () => {
    return (
        <OptionsContainer>
            <OptionLink href="/about-me">About me</OptionLink>
            <OptionLink href="/blog">Blog</OptionLink>
            <OptionLink href="/resume">Résumé</OptionLink>
            {/*<OptionLink href="/portfolio">Portfolio</OptionLink>*/}
        </OptionsContainer>
    );
};

export default Header;

"use client";

// import React from "react";
// import Link from "next/link";

import {
    MainBlogPageContainer,
    PostsContainer,
    DateContainer,
    PostAndDateContainer,
} from "./mainBlogPage.styles";

const MainBlogPage = () => {
    return (
        <>
            <MainBlogPageContainer>
                {/*<PostAndDateContainer>*/}
                {/*    <PostsContainer href="/blog/first-post">Hello World!</PostsContainer>*/}
                {/*    <DateContainer>04.07.2020</DateContainer>*/}
                {/*</PostAndDateContainer>*/}

                {/* Uncomment if needed */}
                {/* <PostAndDateContainer>
          <PostsContainer href="/blog/who-am-I">Who am I?</PostsContainer>
          <DateContainer>04.07.2020</DateContainer>
        </PostAndDateContainer> */}

                {/*<PostAndDateContainer>*/}
                {/*    <PostsContainer href="/blog/learn-front-end">*/}
                {/*        How to become a web developer*/}
                {/*    </PostsContainer>*/}
                {/*    <DateContainer>04.01.2025</DateContainer>*/}
                {/*</PostAndDateContainer>*/}
                <PostAndDateContainer>
                    <PostsContainer href="/blog/health">
                        How to live the best life
                    </PostsContainer>
                    <DateContainer>04.01.2025</DateContainer>
                </PostAndDateContainer>
            </MainBlogPageContainer>
        </>
    );
};

export default MainBlogPage;

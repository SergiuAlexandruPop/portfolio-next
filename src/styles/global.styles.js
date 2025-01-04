"use client";

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    /* Styled-components for overrides and specific use cases */
    body {
        /* Padding can still be customized in styled-components */
        padding: 2rem 8rem;

        @media screen and (max-width: 900px) {
            padding: 1rem;
        }

        @media screen and (max-width: 500px) {
            padding: 0.5rem;
        }
    }

    a {
        text-decoration: none;
        color: black; /* Override Tailwind's inherited styles */
    }

    /* Any additional scoped styles here */
`;

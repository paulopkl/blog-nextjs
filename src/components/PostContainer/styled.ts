import styled, { css } from "styled-components";

export const Container = styled.article`
    img {
        max-width: 100%;
    }

    p {
        margin: ${(props) => props.theme.spacings.medium} 0;
    }

    ul,
    ol {
        margin: ${(props) => props.theme.spacings.medium};
    }

    pre {
        ${({ theme }) => css`
            width: 100%;
            overflow-x: auto;
            background: ${theme.colors.lightGray};
            color: ${theme.colors.darkGray};
            padding: ${theme.spacings.large};
            margin: ${theme.spacings.large};
            line-height: 1.5;
            font-size: ${theme.font.sizes.medium};
        `}
    }
`;

import React from "react";
import { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/Global_Styles";
import { theme } from "../styles/theme";

// const Container = styled.div`
//     background: ${({ theme }) => theme.colors.primary};
// `;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            {/* <Container>Batata</Container> */}
            <GlobalStyles />
        </ThemeProvider>
    );
}

export default MyApp;

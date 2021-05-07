import React from "react";
import * as Styled from "./styled";

export type MainContainerProps = {
    children: JSX.Element | React.ReactNode;
};

export const MainContainer = ({ children }: MainContainerProps) => {
    return <Styled.Container>{children}</Styled.Container>;
};

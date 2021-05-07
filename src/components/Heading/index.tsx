import { Container } from "./styled";

export interface HeadingProps {
    children: React.ReactNode | JSX.Element;
}

export const Heading = ({ children }: HeadingProps) => {
    return <Container>{children}</Container>;
};

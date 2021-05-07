import Link from "next/link";
import { SITE_NAME } from "../../config/app-config";
import { Container } from "./styled";

export const Footer = () => {
    return (
        <Container>
            make with affection by Paulo
            {/* <Link href="/">
                <a>{SITE_NAME}</a>
            </Link> */}
        </Container>
    );
};

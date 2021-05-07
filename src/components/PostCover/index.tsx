import Link from "next/link";
import { Container } from "./styled";

export interface PostCoverProps {
    coverUrl: string;
    alt: string;
}

export const PostCover = ({ coverUrl, alt }: PostCoverProps) => {
    return <Container src={coverUrl} alt={alt} />;
};

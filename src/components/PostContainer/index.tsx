import { Container } from "./styled";

export interface PostContainerProps {
    content: string;
}

export const PostContainer = ({ content }: PostContainerProps) => {
    return <Container dangerouslySetInnerHTML={{ __html: content }} />;
};

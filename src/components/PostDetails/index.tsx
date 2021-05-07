import { Date } from "../Date";
import { Container } from "./styled";

export interface DateDetailsProps {
    date: string;
    author: string;
    category: string;
}

export const PostDetails = ({ date, author, category }: DateDetailsProps) => {
    return (
        <Container>
            Published By <Date date={date} /> by {author} | {category}
        </Container>
    );
};

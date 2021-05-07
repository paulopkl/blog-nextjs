import Link from "next/link";
import { formatDate } from "../../utils/format-date";
import { Container } from "./styled";

export interface DateProps {
    date: string;
}

export const Date = ({ date }: DateProps) => {
    return <Container>{formatDate(date)}</Container>;
};

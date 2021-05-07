import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainContainer } from "../../components/MainContainer";
import { PostCard } from "../../components/PostCard";
import { HomeProps } from "../../pages";
import { Container } from "./styles";

export type HomePageProps = HomeProps;

export default function HomePage({ posts }: HomePageProps) {
    return (
        <>
            <Header />
            <MainContainer>
                <Container>
                    {posts.map((post, i) => (
                        <PostCard
                            key={post.slug}
                            cover={post.cover.formats.small.url}
                            slug={post.slug}
                            title={post.title}
                        />
                        // <h2 style={{ background: "red" }} key={i}>
                        //     {post.title}
                        // </h2>
                    ))}
                </Container>
            </MainContainer>
            <Footer />
        </>
    );
}

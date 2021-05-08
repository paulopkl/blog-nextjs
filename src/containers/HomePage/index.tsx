import Head from "next/head";
import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainContainer } from "../../components/MainContainer";
import { PostCard } from "../../components/PostCard";
import { SITE_NAME } from "../../config/app-config";
import { HomeProps } from "../../pages";
import { Container } from "./styles";

export type HomePageProps = HomeProps;

export default function HomePage({ posts }: HomePageProps) {
    return (
        <>
            <Head>
                <title>{SITE_NAME}</title>
                <meta name="description" content="This's my tech blog" />
            </Head>
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

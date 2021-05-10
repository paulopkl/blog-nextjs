import Head from "next/head";
import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainContainer } from "../../components/MainContainer";
import { PostCard } from "../../components/PostCard";
import { SITE_NAME } from "../../config/app-config";
import { HomeProps } from "../../pages";
import { CategoryProps } from "../../pages/categories/[category]";
import { Category, Container } from "./styles";

export type HomePageProps = HomeProps & {
    category?: string;
};

export default function HomePage({ posts, category }: HomePageProps) {
    return (
        <>
            <Head>
                <title>{category ? `${category} - ${SITE_NAME}` : SITE_NAME}</title>
                <meta name="description" content="This's my tech blog" />
            </Head>
            <Header />
            {category && <Category>Category: {category}</Category>}
            <MainContainer>
                <Container>
                    {posts.map((post, i) => (
                        <PostCard
                            key={post.slug}
                            cover={post.cover.formats.small.url}
                            slug={post.slug}
                            title={post.title}
                        />
                    ))}
                </Container>
            </MainContainer>
            <Footer />
        </>
    );
}

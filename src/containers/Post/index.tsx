import Head from "next/head";
import React from "react";
import { Comments } from "../../Comments";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Heading } from "../../components/Heading";
import { MainContainer } from "../../components/MainContainer";
import { PostContainer } from "../../components/PostContainer";
import { PostCover } from "../../components/PostCover";
import { PostDetails } from "../../components/PostDetails";
import { SITE_NAME } from "../../config/app-config";
import { removeHTML } from "../../utils/remove-html";

import { PostData } from "./../../domain/posts/post";

export type PostProps = {
    post: PostData;
};

export default function Post({ post }: PostProps) {
    return (
        <>
            <Head>
                <title>
                    {post.title} - {SITE_NAME}
                </title>
                <meta
                    name="description"
                    content={removeHTML(post.content).slice(0, 150)}
                />
            </Head>
            <Header />
            <MainContainer>
                <Heading>{post.title}</Heading>
                <PostCover
                    coverUrl={
                        post.cover.formats.large?.url ||
                        post.cover.formats.medium?.url ||
                        post.cover.formats.small.url
                    }
                    alt={post.cover?.name}
                />
                <PostDetails
                    author={post.author?.name || "[NÃO ESPECIFICADO]"}
                    category={post.category?.name || "[NÃO ESPECIFICADO]"}
                    date={post.created_at}
                />
                <PostContainer content={post.content} />
                <Comments title={post.title} slug={post.slug} />
            </MainContainer>
            <Footer />
        </>
    );
}

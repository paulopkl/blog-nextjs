import { GetServerSideProps, GetStaticProps } from "next";
// import { useEffect, useState } from "react";
import HomePage from "../../containers/HomePage";
import { getAllPosts } from "../../data/posts/get-all-posts";
import { PostData } from "../../domain/posts/post";

export type CategoryProps = {
    posts: PostData[];
    category: string;
};

const Category = ({ posts, category }: CategoryProps) => (
    <HomePage posts={posts} category={category} />
);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { category } = ctx.query;
    const urlQuery = `_sort=id:desc&_start=0&_limit=30&category.name_contains=${category}`;
    const posts = await getAllPosts(urlQuery);

    return {
        props: { posts, category },
    };
};

export default Category;

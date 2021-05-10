import { GetStaticProps } from "next";
// import { useEffect, useState } from "react";
import HomePage from "../containers/HomePage";
import { getAllPosts } from "../data/posts/get-all-posts";
import { PostData } from "../domain/posts/post";

export type HomeProps = {
    posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
    // const [posts, setPosts] = useState<PostData[]>([]);

    // useEffect(() => {
    //     getPosts().then((data) => setPosts(data));
    // }, []);

    return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllPosts("_sort=id:desc&_start=0&_limit=30");

    return {
        props: { posts },
        revalidate: 3,
    };
};

import { useRouter } from 'next/router';
import Error from 'next/error';
import { GetStaticPaths, GetStaticProps } from "next";
import { PostData } from "../../domain/posts/post";
import Post from "../../containers/Post";
import { countAllPosts } from "../../data/posts/count-all-posts";
import { getPost } from "../../data/posts/get-post";
import { getAllPosts } from "../../data/posts/get-all-posts";

export interface DynamicPostProps {
    post: PostData;
}

const DynamicPost = ({ post }: DynamicPostProps) => {
    const router = useRouter();

    if (router.isFallback) return <div>Page still loading...</div>;

    if (!post) return <Error statusCode={404} />

    return <Post post={post} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const numberOfPosts = await countAllPosts();
    const posts = await getAllPosts(`_limit=${numberOfPosts}`);

    return {
        paths: posts.map((post: PostData) => ({
            params: {
                slug: post.slug,
            },
        })),
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (ctx: any) => {
    const posts: PostData[] = await getPost(ctx.params.slug);
    const post = posts.length > 0 ? posts[0] : {};

    return {
        props: { post },
        revalidate: 5,
    };
};

export default DynamicPost;

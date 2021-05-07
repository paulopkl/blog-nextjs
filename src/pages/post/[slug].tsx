import { GetStaticPaths, GetStaticProps } from "next";
import { countAllPosts } from "../../data/posts/count-all-posts";
import { getPost } from "../../data/posts/get-post";
import { getAllPosts } from "../../data/posts/get-all-posts";
import { PostData } from "../../domain/posts/post";
import Post from "../../containers/Post";

export interface DynamicPostProps {
    post: PostData;
}

const DynamicPost = ({ post }: DynamicPostProps) => {
    return <Post post={post} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const numberOfPosts = await countAllPosts();
    const posts = await getAllPosts(`_limit=${numberOfPosts}`);

    const paths = posts.map((post: PostData) => ({
        params: {
            slug: post.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx: any) => {
    const posts: PostData[] = await getPost(ctx.params.slug);

    return {
        props: { post: posts[0] },
        // revalidate: 5,
    };
};

export default DynamicPost;

import { fetchJson } from "../../utils/fetch-json";
import { POSTS_URL } from "../../config/app-config";
import { PostData } from "../../domain/posts/post";
import { markdownToHtml } from "../../utils/markdown-to-html";

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
    const slugString = Array.isArray(slug) ? slug[0] : slug;
    const url = `${POSTS_URL}?slug_contains=${slugString}`;
    // const posts = await fetch(POSTS_URL)
    //     .then((data) => data.json())
    //     .catch((err) => console.error(err));
    const jsonPosts = await fetchJson<PostData[]>(url);
    const content = await markdownToHtml(jsonPosts[0].content);
    const finalContent = { ...jsonPosts[0], content };
    return [finalContent];
};

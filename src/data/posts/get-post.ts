import { fetchJson } from "../../utils/fetch-json";
import { POSTS_URL } from "../../config/app-config";
import { PostData } from "../../domain/posts/post";
import { markdownToHtml } from "../../utils/markdown-to-html";

export async function getPost(slug: string | string[]): Promise<PostData[]> {
    const slugString = Array.isArray(slug) ? slug[0] : slug;
    const url = `${POSTS_URL}?slug_contains=${slugString}`;
    const jsonPosts = await fetchJson<PostData[]>(url);

    if (!jsonPosts.length) return jsonPosts;

    const content = await markdownToHtml(jsonPosts[0].content);
    const finalContent = [{ ...jsonPosts[0], content }];
    return finalContent;
}

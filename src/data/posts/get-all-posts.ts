import { fetchJson } from "../../utils/fetch-json";
import { POSTS_URL } from "../../config/app-config";
import { PostData } from "../../domain/posts/post";

export const getAllPosts = async (query: string): Promise<PostData[]> => {
    const url = `${POSTS_URL}?${query}`;
    // const posts = await fetch(POSTS_URL)
    //     .then((data) => data.json())
    //     .catch((err) => console.error(err));
    const post = await fetchJson<PostData[]>(url);
    return post;
};

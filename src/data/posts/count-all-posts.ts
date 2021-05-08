import { fetchJson } from "../../utils/fetch-json";
import { POSTS_URL } from "../../config/app-config";

export const countAllPosts = async (
    query: string | undefined = "",
): Promise<string> => {
    const url = query ? `${POSTS_URL}/count?${query}` : `${POSTS_URL}/count`;
    const numberOfPosts = await fetchJson<string>(url);
    return numberOfPosts;
};

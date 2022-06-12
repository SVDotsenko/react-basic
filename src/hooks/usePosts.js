import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    return useMemo(() => {
        return sort ? [...posts].sort((a, b) => a[sort].localeCompare(b[sort])) : posts;
    }, [sort, posts]);
}

export const usePosts = (posts, filter) => {
    const sortedPosts = useSortedPosts(posts, filter.sort);
    return useMemo(() => {
        return sortedPosts.filter(post =>
            post.title.toLowerCase().includes(filter.query.toLowerCase()));
    }, [filter.query, sortedPosts]);
}

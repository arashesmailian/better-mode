import { useInfiniteQuery } from "@tanstack/react-query";
import graphqlClient from "../services/graphqlClient";
import type { Post } from "../components/PostCard";

const GET_POSTS = `
  query GetPosts($cursor: String) {
    posts(cursor: $cursor) {
      id
      title
      content
      likes
    }
  }
`;

const usePosts = () => {
  return useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = null }) =>
      graphqlClient(GET_POSTS, { cursor: pageParam }),
    getNextPageParam: (lastPage: { posts: Post[] }) =>
      lastPage.posts[lastPage.posts.length - 1]?.id,
    initialPageParam: null,
  });
};

export default usePosts;

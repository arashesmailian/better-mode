import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const GET_POSTS = gql`
  query GetPosts($limit: Int!, $offset: Int) {
    getPosts(limit: $limit, offset: $offset) {
      totalCount
      nodes {
        description
        id
        positiveReactions
        positiveReactionsCount
        reactionsCount
        relativeUrl
        slug
        textContent
        title
        url
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  // const [isFetchingMore, setIsFetchingMore] = useState(false);
  // const isFetchingMoreRef = useRef(false);

  const { data, loading, error, fetchMore } = useQuery(GET_POSTS, {
    variables: { limit: 2, offset: 0 },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (data) {
      const newPosts = data.getPosts.nodes;
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setTotalCount(data.getPosts.totalCount);
    }
  }, [data]);

  const loadMorePosts = () => {
    fetchMore({
      variables: {
        limit: 2,
        offset: posts.length + 2,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newPosts = [
          ...previousResult.getPosts.nodes,
          ...fetchMoreResult.getPosts.nodes,
        ];
        return {
          getPosts: {
            ...fetchMoreResult.getPosts,
            nodes: newPosts,
            pageInfo: fetchMoreResult.getPosts.pageInfo,
          },
        };
      },
    });
  };

  return {
    posts,
    totalCount,
    hasNextPage: posts.length < totalCount,
    loading,
    error,
    loadMorePosts,
  };
};

export default usePosts;

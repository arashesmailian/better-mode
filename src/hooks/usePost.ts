import { gql, useQuery } from "@apollo/client";

export const GET_POST = gql`
  query GetPost($postId: ID!) {
    getPost(postId: $postId) {
      createdAt
      description
      positiveReactions
      positiveReactionsCount
      reactionsCount
      slug
      status
      textContent
      title
      updatedAt
      url
      id
      tags {
        title
        slug
      }
    }
  }
`;

export const usePost = (postId: string) => {
  const { data, loading, error, refetch } = useQuery(GET_POST, {
    variables: { postId },
  });

  return {
    post: data?.getPost,
    loading,
    error,
    refetch,
  };
};

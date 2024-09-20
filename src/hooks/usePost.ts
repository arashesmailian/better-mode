import { gql, useQuery } from "@apollo/client";

const GET_POST = gql`
  query GetPost($postId: ID!) {
    getPost(postId: $postId) {
      description
      followersCount
      id
      positiveReactionsCount
      textContent
      title
      createdAt
    }
  }
`;

export const usePost = (postId: string) => {
  const { data, loading, error } = useQuery(GET_POST, {
    variables: { postId },
  });

  return {
    post: data?.getPost,
    loading,
    error,
  };
};
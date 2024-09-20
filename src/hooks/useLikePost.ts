import { gql, useMutation } from "@apollo/client";

const LIKE_POST = gql`
  mutation LikePost($id: ID!) {
    likePost(id: $id) {
      id
      likes
    }
  }
`;

export const useLikePost = () => {
  const [likePost, { data, loading, error }] = useMutation(LIKE_POST);

  const like = (id: number) => {
    return likePost({ variables: { id } });
  };

  return {
    like,
    data,
    loading,
    error,
  };
};

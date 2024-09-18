import { useMutation, useQueryClient } from "@tanstack/react-query";
import graphqlClient from "../services/graphqlClient";

const LIKE_POST = `
  mutation LikePost($id: ID!) {
    likePost(id: $id) {
      id
      likes
    }
  }
`;

export type LikePostResponse = {
  likePost: {
    id: string;
    likes: number;
  };
};
export type LikePostVariables = {
  id: string;
};

export const useLikePost = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation<LikePostResponse, unknown, LikePostVariables>(
    // () => graphqlClient<LikePostResponse,unknown, LikePostVariables>(LIKE_POST, { id }),
    async () => {
      const response = await graphqlClient.request<
        LikePostResponse,
        LikePostVariables
      >(LIKE_POST, { id });
      return response;
    },
    {
      onMutate: async () => {
        await queryClient.cancelQueries({ queryKey: ["post", id] });

        const previousPost = queryClient.getQueryData<{
          id: string;
          likes: number;
        }>(["post", id]);

        if (previousPost) {
          queryClient.setQueryData(["post", id], {
            ...previousPost,
            likes: previousPost.likes + 1,
          });
        }

        return { previousPost };
      },
      onError: (context: { previousPost?: { id: string; likes: number } }) => {
        if (context?.previousPost) {
          queryClient.setQueryData(["post", id], context.previousPost);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ["post", id] });
      },
    }
  );
};

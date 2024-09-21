import { gql, useMutation } from "@apollo/client";

const ADD_REACTION = gql`
  mutation addReaction($postId: ID!, $input: AddReactionInput!) {
    addReaction(input: $input, postId: $postId) {
      status
    }
  }
`;

const REMOVE_REACTION = gql`
  mutation removeReaction($postId: ID!, $reaction: String!) {
    removeReaction(reaction: $reaction, postId: $postId) {
      status
    }
  }
`;

export const useReaction = () => {
  const [
    addReactionMutation,
    { data: addData, loading: addLoading, error: addError },
  ] = useMutation(ADD_REACTION);
  const [
    removeReactionMutation,
    { data: removeData, loading: removeLoading, error: removeError },
  ] = useMutation(REMOVE_REACTION);

  const addReaction = (postId: string) => {
    const input = {
      reaction: "love",
      overrideSingleChoiceReactions: true,
    };
    console.log(input);

    return addReactionMutation({
      variables: { postId, input },
    });
  };

  const removeReaction = (postId: string) => {
    const reaction = "love";
    return removeReactionMutation({
      variables: { postId, reaction },
    });
  };

  return {
    addReaction,
    removeReaction,
    addData,
    addLoading,
    addError,
    removeData,
    removeLoading,
    removeError,
  };
};

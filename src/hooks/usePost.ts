import { useQuery } from "@tanstack/react-query";
import graphqlClient from "../services/graphqlClient";

const GET_POST = `
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      title
      content
      likes
    }
  }
`;

export const usePost = (id: number) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => graphqlClient(GET_POST, { id }),
  });
};

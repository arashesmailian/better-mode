import axios, { type AxiosResponse } from "axios";

const endpoint = import.meta.env.VITE_GRAPHQL_ENDPOINT;

// type GraphQLResponse<T> = {
//   data: T;
// };

const graphqlClient = async (
  query: string,
  variables: Record<string, unknown>
): Promise<unknown> => {
  const response: AxiosResponse<unknown> = await axios.post(
    endpoint,
    {
      query,
      variables,
    },
    {
      headers: {
        Authorization: `Bearer YOUR_ACCESS_TOKEN`,
      },
    }
  );

  return response;
};

export default graphqlClient;

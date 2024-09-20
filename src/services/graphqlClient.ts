import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.bettermode.com/", // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InZEU2N0ZzBCYXoiLCJuZXR3b3JrSWQiOiI3S0czVmc2YTR5IiwibmV0d29ya0RvbWFpbiI6ImRldmFwcC1iOTM3eDZjaC5iZXR0ZXJtb2RlLmlvIiwidG9rZW5UeXBlIjoiVVNFUiIsImVudGl0eUlkIjpudWxsLCJwZXJtaXNzaW9uQ29udGV4dCI6bnVsbCwicGVybWlzc2lvbnMiOm51bGwsInNlc3Npb25JZCI6IllSalAwdk1ROWtnRnhlUDRpZ0ZjVlowcUlYNTQ2VWRGeHJyMFJNMERLdkRGb216aGFnIiwiaWF0IjoxNzI2NzMwMjAyLCJleHAiOjE3MjkzMjIyMDJ9.KZ4dnkRLNN3dz9Dwi-76ZNgBQ81T31U3kc-w4q0aNRA`, // Replace with your access token
  },
});

export default client;

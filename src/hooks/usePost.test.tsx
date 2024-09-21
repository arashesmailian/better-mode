import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { usePost } from "./usePost"; // Assuming this is the hook you're testing
import { MockedProvider } from "@apollo/client/testing";
import { GET_POST } from "./usePost"; // Assuming you're fetching posts using this query

const mocks = [
  {
    request: {
      query: GET_POST,
      variables: { postId: "Vin1xSGcKOOAUMH" },
    },
    result: {
      data: {
        getPost: {
          createdAt: "2024-09-18T04:19:31.486Z",
          description:
            "Join us for Code Marathon 2024: Innovate for Impact, a 48-hour hackathon where creativity, technology, and innovation converge...",
          positiveReactions: null,
          positiveReactionsCount: null,
          reactionsCount: 0,
          slug: "code-marathon-2024-innovate-for-impact",
          status: "PUBLISHED",
          textContent:
            "Join us for Code Marathon 2024: Innovate for Impact, a 48-hour hackathon where creativity, technology, and innovation converge...",
          title: "Code Marathon 2024: Innovate for Impact",
          updatedAt: "2024-09-21T00:25:14.803Z",
          url: "https://devapp-b937x6ch.bettermode.io/events/post/code-marathon-2024-innovate-for-impact-Vin1xSGcKOOAUMH",
          id: "Vin1xSGcKOOAUMH",
          tags: [
            {
              title: "devapp",
              slug: "devapp",
              __typename: "Tag",
            },
          ],
          __typename: "Post",
        },
      },
    },
  },
];

describe("usePost hook", () => {
  it("should fetch the post data correctly", async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => usePost("Vin1xSGcKOOAUMH"),
      {
        wrapper: ({ children }) => (
          <MockedProvider mocks={mocks} addTypename={false}>
            {children}
          </MockedProvider>
        ),
      }
    );

    await waitForNextUpdate();

    // Check the post title
    expect(result.current.post.title).toBe(
      "Code Marathon 2024: Innovate for Impact"
    );

    // Check the post content
    expect(result.current.post.textContent).toContain(
      "Join us for Code Marathon 2024"
    );

    // Check the post tags
    expect(result.current.post.tags).toHaveLength(1);
    expect(result.current.post.tags[0].title).toBe("devapp");
  });
});

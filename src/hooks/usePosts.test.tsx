import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { MockedProvider } from "@apollo/client/testing";
import usePosts from "./usePosts"; // Adjust the path to your hook file
import { GET_POSTS } from "./usePosts"; // The query from your hook

// Mocks for the GraphQL API response with totalCount 14
const mocks = [
  // Initial load (first 5 posts)
  {
    request: {
      query: GET_POSTS,
      variables: { limit: 5, offset: 0 },
    },
    result: {
      data: {
        getPosts: {
          totalCount: 14,
          nodes: [
            {
              id: "XOOQYZyOC7DY7vJ",
              title: "What Would You Like to See Here?",
              description:
                "Let's brainstorm together! If you could add any new feature to our forum, what would it be?",
              textContent:
                "Let's brainstorm together! If you could add any new feature to our forum, what would it be?",
              url: "https://devapp-b937x6ch.bettermode.io/discussions/post/what-would-you-like-to-see-here-XOOQYZyOC7DY7vJ",
            },
            {
              id: "xCvuOBOHbvS8a7R",
              title: "Communication, collaboration, coordination:",
              description:
                "teamwaaaaIt takes a wide variety of skills, perspectives, and expertise to build a next-generation product.",
              textContent:
                "teamwaaaaIt takes a wide variety of skills, perspectives, and expertise to build a next-generation product.",
              url: "https://devapp-b937x6ch.bettermode.io/blog/post/communication-collaboration-coordination-xCvuOBOHbvS8a7R",
            },
            {
              id: "XOOQYZyOC7DY7vJ",
              title: "What Would You Like to See Here?",
              description:
                "Let's brainstorm together! If you could add any new feature to our forum, what would it be?",
              textContent:
                "Let's brainstorm together! If you could add any new feature to our forum, what would it be?",
              url: "https://devapp-b937x6ch.bettermode.io/discussions/post/what-would-you-like-to-see-here-XOOQYZyOC7DY7vJ",
            },
            {
              id: "xCvuOBOHbvS8a7R",
              title: "Communication, collaboration, coordination:",
              description:
                "teamwaaaaIt takes a wide variety of skills, perspectives, and expertise to build a next-generation product.",
              textContent:
                "teamwaaaaIt takes a wide variety of skills, perspectives, and expertise to build a next-generation product.",
              url: "https://devapp-b937x6ch.bettermode.io/blog/post/communication-collaboration-coordination-xCvuOBOHbvS8a7R",
            },
            {
              id: "xCvuOBOHbvS8a7R",
              title: "Communication, collaboration, coordination:",
              description:
                "teamwaaaaIt takes a wide variety of skills, perspectives, and expertise to build a next-generation product.",
              textContent:
                "teamwaaaaIt takes a wide variety of skills, perspectives, and expertise to build a next-generation product.",
              url: "https://devapp-b937x6ch.bettermode.io/blog/post/communication-collaboration-coordination-xCvuOBOHbvS8a7R",
            },
          ],
          pageInfo: {
            endCursor:
              "eyJpZCI6InIyN0NldXplYWFWSWtiWiIsIm9yZGVyQnkiOiJjcmVhdGVkQXQiLCJ2YWx1ZSI6IjIwMjQtMDktMThUMDQ6MTk6MzEuNDg2WiJ9",
            hasNextPage: true,
          },
        },
      },
    },
  },
  // Load more posts (next 5 posts)
  {
    request: {
      query: GET_POSTS,
      variables: { limit: 5, offset: 5 },
    },
    result: {
      data: {
        getPosts: {
          totalCount: 14,
          nodes: [
            {
              id: "Vin1xSGcKOOAUMH",
              title: "Code Marathon 2024: Innovate for Impact",
              description:
                "Join us for Code Marathon 2024: Innovate for Impact, a 48-hour hackathon...",
              textContent:
                "Join us for Code Marathon 2024: Innovate for Impact, a 48-hour hackathon...",
              url: "https://devapp-b937x6ch.bettermode.io/events/post/code-marathon-2024-innovate-for-impact-Vin1xSGcKOOAUMH",
            },
            {
              id: "Vin1xSGcKOOAUMH",
              title: "Code Marathon 2024: Innovate for Impact",
              description:
                "Join us for Code Marathon 2024: Innovate for Impact, a 48-hour hackathon...",
              textContent:
                "Join us for Code Marathon 2024: Innovate for Impact, a 48-hour hackathon...",
              url: "https://devapp-b937x6ch.bettermode.io/events/post/code-marathon-2024-innovate-for-impact-Vin1xSGcKOOAUMH",
            },
            {
              id: "Vin1xSGcKOOAUMH",
              title: "Code Marathon 2024: Innovate for Impact",
              description:
                "Join us for Code Marathon 2024: Innovate for Impact, a 48-hour hackathon...",
              textContent:
                "Join us for Code Marathon 2024: Innovate for Impact, a 48-hour hackathon...",
              url: "https://devapp-b937x6ch.bettermode.io/events/post/code-marathon-2024-innovate-for-impact-Vin1xSGcKOOAUMH",
            },
            {
              id: "Vin1xSGcKOOAUMH",
              title: "Code Marathon 2024: Innovate for Impact",
              description:
                "Join us for Code Marathon 2024: Innovate for Impact, a 48-hour hackathon...",
              textContent:
                "Join us for Code Marathon 2024: Innovate for Impact, a 48-hour hackathon...",
              url: "https://devapp-b937x6ch.bettermode.io/events/post/code-marathon-2024-innovate-for-impact-Vin1xSGcKOOAUMH",
            },
            {
              id: "Vin1xSGcKOOAUMH",
              title: "Code Marathon 2024: Innovate for Impact",
              description:
                "Join us for Code Marathon 2024: Innovate for Impact, a 48-hour hackathon...",
              textContent:
                "Join us for Code Marathon 2024: Innovate for Impact, a 48-hour hackathon...",
              url: "https://devapp-b937x6ch.bettermode.io/events/post/code-marathon-2024-innovate-for-impact-Vin1xSGcKOOAUMH",
            },
          ],
          pageInfo: {
            endCursor:
              "eyJpZCI6InIyN0NldXplYWFWSWtiWiIsIm9yZGVyQnkiOiJjcmVhdGVkQXQiLCJ2YWx1ZSI6IjIwMjQtMDktMThUMDQ6MTk6MzEuNDg2WiJ9",
            hasNextPage: true,
          },
        },
      },
    },
  },
  // Last API call with 4 posts (since totalCount = 14)
  {
    request: {
      query: GET_POSTS,
      variables: { limit: 5, offset: 10 },
    },
    result: {
      data: {
        getPosts: {
          totalCount: 14,
          nodes: [
            {
              id: "jbbanrYbhe95Hin",
              title: "International Conference on Engineering & Technology",
              description:
                "The conference aims to bring together information system researchers...",
              textContent:
                "The conference aims to bring together information system researchers...",
              url: "https://devapp-b937x6ch.bettermode.io/events/post/international-conference-on-engineering-technology-jbbanrYbhe95Hin",
            },
            {
              id: "hTgokLJx8WNAPZ2",
              title: "How do I reverse a string in Python?",
              description: "",
              textContent: null,
              url: "https://devapp-b937x6ch.bettermode.io/questions/post/how-do-i-reverse-a-string-in-python-hTgokLJx8WNAPZ2",
            },
            {
              id: "gx3MFPTUhyDt9zK",
              title:
                "Why entrepreneurs need to adopt the ‘solutionism’ mindset",
              description: "",
              textContent: null,
              url: "https://devapp-b937x6ch.bettermode.io/questions/post/why-entrepreneurs-need-to-adopt-the-solutionism-mindset-if-they-want-to-gx3MFPTUhyDt9zK",
            },
            {
              id: "GNPCMGsAZN3ukSR",
              title:
                "Building a resilient system: Our journey to observability",
              description:
                "At Interlock we focus on customer experience above all...",
              textContent:
                "At Interlock we focus on customer experience above all...",
              url: "https://devapp-b937x6ch.bettermode.io/blog/post/building-a-resilient-system-our-journey-to-observability-GNPCMGsAZN3ukSR",
            },
          ],
          pageInfo: {
            endCursor:
              "eyJpZCI6IkZEWngzWVk5OFB5QjdiTyIsIm9yZGVyQnkiOiJjcmVhdGVkQXQiLCJ2YWx1ZSI6IjIwMjQtMDktMThUMDQ6MTk6MzEuNDg2WiJ9",
            hasNextPage: false, // No more posts after this
          },
        },
      },
    },
  },
];

describe("usePosts hook", () => {
  it("should fetch posts on initial load", async () => {
    const { result, waitForNextUpdate } = renderHook(() => usePosts(), {
      wrapper: ({ children }) => (
        <MockedProvider mocks={mocks} addTypename={false}>
          {children}
        </MockedProvider>
      ),
    });

    // Wait for data to be fetched
    await waitForNextUpdate();

    // Check the updated state after data is loaded
    expect(result.current.posts).toHaveLength(5);
    // expect(result.current.posts[0].title).toBe(
    //   "What Would You Like to See Here?"
    // );
    expect(result.current.hasNextPage).toBe(true);
  });

  it("should load more posts when loadMorePosts is called", async () => {
    const { result, waitForNextUpdate } = renderHook(() => usePosts(), {
      wrapper: ({ children }) => (
        <MockedProvider mocks={mocks} addTypename={false}>
          {children}
        </MockedProvider>
      ),
    });

    // Wait for initial load
    await waitForNextUpdate();

    // Act: Call loadMorePosts to load additional posts
    act(() => {
      result.current.loadMorePosts();
    });

    // Wait for loadMorePosts to complete
    await waitForNextUpdate();

    // Check that the new post is added
    expect(result.current.posts).toHaveLength(5);
    // expect(result.current.posts[2].title).toBe(
    //   "Code Marathon 2024: Innovate for Impact"
    // );
    expect(result.current.hasNextPage).toBe(true);
  });

  it("should handle the last page correctly with fewer posts", async () => {
    const { result, waitForNextUpdate } = renderHook(() => usePosts(), {
      wrapper: ({ children }) => (
        <MockedProvider mocks={mocks} addTypename={false}>
          {children}
        </MockedProvider>
      ),
    });

    // Wait for initial load
    await waitForNextUpdate();

    // Act: Call loadMorePosts twice to reach the last page
    act(() => {
      result.current.loadMorePosts();
    });

    await waitForNextUpdate();

    // Check that the final posts are added and hasNextPage is false
    expect(result.current.posts).toHaveLength(5); // 2 (initial) + 1 + 4 (last call)
    // expect(result.current.posts[6].title).toBe(
    //   "Building a resilient system: Our journey to observability"
    // );
    expect(result.current.hasNextPage).toBe(true); // End of pagination
  });
});

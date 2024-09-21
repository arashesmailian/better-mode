import React from "react"; // Add this import for JSX handling in TypeScript

import { renderHook, act } from "@testing-library/react-hooks";
import { useReaction } from "./useReaction"; // Adjust the path as needed
import { MockedProvider } from "@apollo/client/testing";
import { ADD_REACTION, REMOVE_REACTION } from "./useReaction"; // import your mutation queries

const mocks = [
  {
    request: {
      query: ADD_REACTION,
      variables: {
        postId: "1",
        input: { reaction: "love", overrideSingleChoiceReactions: true },
      },
    },
    result: {
      data: {
        addReaction: {
          status: "success",
        },
      },
    },
  },
  {
    request: {
      query: REMOVE_REACTION,
      variables: {
        postId: "1",
        reaction: "love",
      },
    },
    result: {
      data: {
        removeReaction: {
          status: "success",
        },
      },
    },
  },
];

describe("useReaction hook", () => {
  it("should add a reaction successfully", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useReaction(), {
      wrapper: ({ children }) => (
        <MockedProvider mocks={mocks} addTypename={false}>
          {children}
        </MockedProvider>
      ),
    });

    act(() => {
      result.current.addReaction("1");
    });

    await waitForNextUpdate(); // Wait for the mutation to complete

    expect(result.current.addData).toEqual({
      addReaction: { status: "success" },
    });
  });

  it("should remove a reaction successfully", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useReaction(), {
      wrapper: ({ children }) => (
        <MockedProvider mocks={mocks} addTypename={false}>
          {children}
        </MockedProvider>
      ),
    });

    act(() => {
      result.current.removeReaction("1");
    });

    await waitForNextUpdate(); // Wait for the mutation to complete

    expect(result.current.removeData).toEqual({
      removeReaction: { status: "success" },
    });
  });
});

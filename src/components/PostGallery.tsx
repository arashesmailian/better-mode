import PostCard from "./PostCard";
// import usePosts from "../hooks/usePosts";
import type { TPost } from "../types";

const PostGallery = () => {
  // const { data, fetchNextPage, hasNextPage } = usePosts();

  const posts: TPost[] = [
    { id: "1", title: "Post 1", content: "Content 1", like: 1 },
    { id: "2", title: "Post 2", content: "Content 2", like: 2 },
    { id: "3", title: "Post 3", content: "Content 3", like: 3 },
    { id: "4", title: "Post 4", content: "Content 4", like: 4 },
  ];

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      {/* {hasNextPage && (
        <button onClick={() => fetchNextPage()}>Show More</button>
      )} */}
    </div>
  );
};

export default PostGallery;

import PostCard from "./PostCard";
import usePosts from "../hooks/usePosts";

const PostGallery = () => {
  const { posts, hasNextPage, loading, error, loadMorePosts } = usePosts();

  console.log(posts);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      {hasNextPage && <button onClick={loadMorePosts}>Show More</button>}
    </div>
  );
};

export default PostGallery;

import PostCard from "./PostCard";
import usePosts from "../hooks/usePosts";

const PostGallery = () => {
  const { posts, hasNextPage, loading, error, loadMorePosts } = usePosts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {hasNextPage && (
            <button
              onClick={loadMorePosts}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostGallery;

import { useParams } from "react-router-dom";
import { usePost } from "../hooks/usePost";
import LikeButton from "./LikeButton";
import { formatDate } from "../utils/formatDate";

const PostDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { post, loading, error } = usePost(id);
  console.log(post);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <div className="mb-4">
        <h1 className="font-bold text-3xl text-gray-900 mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500">{formatDate(post.createdAt)}</p>
      </div>

      <div className="text-gray-700 text-lg mb-6">{post.textContent}</div>

      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center space-x-2">
          <LikeButton postId={post.id} likes={post.reactionsCount} />
          <span className="text-gray-600">
            {post.reactionsCount ?? 0} likes
          </span>
        </div>

        <div className="flex space-x-2">
          {post.tags?.map((item) => (
            <span
              key={item.slug}
              className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
            >
              {item.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

import { useParams } from "react-router-dom";
import { usePost } from "../hooks/usePost";
import LikeButton from "./LikeButton";
import { formatDate } from "../utils/formatDate";

const PostDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { post, loading, error } = usePost(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-black">
        {post.title}
        <p>{formatDate(post.createdAt)}</p>
      </div>
      <p className="text-gray-700 text-base">{post.textContent}</p>
      <LikeButton postId={post.id} likes={post.positiveReactionsCount} />
    </div>
  );
};

export default PostDetails;

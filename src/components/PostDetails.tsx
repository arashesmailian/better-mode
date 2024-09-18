import { useParams } from "react-router-dom";
import { usePost } from "../hooks/usePost";
import LikeButton from "./LikeButton";

const PostDetails = () => {
  const { id } = useParams();
  const { data: post } = usePost(Number(id)) as unknown as { title: string; content: string; id: number; likes: number };

  return (
    <div className="post-details">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <LikeButton postId={post.id} likes={post.likes} />
    </div>
  );
};

export default PostDetails;

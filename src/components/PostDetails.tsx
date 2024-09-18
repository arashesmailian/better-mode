import { useParams } from "react-router-dom";
// import { usePost } from "../hooks/usePost";
import LikeButton from "./LikeButton";
import type { TPost } from "../types";

const PostDetails = () => {
  const { id } = useParams();
  const posts: TPost[] = [
    { id: "1", title: "Post 1", content: "Content 1", like: 1 },
    { id: "2", title: "Post 2", content: "Content 2", like: 2 },
    { id: "3", title: "Post 3", content: "Content 3", like: 3 },
    { id: "4", title: "Post 4", content: "Content 4", like: 4 },
  ];
  const post = posts.filter((post) => post.id === id)[0];
  // const { data: post } = usePost(Number(id)) as unknown as { title: string; content: string; id: number; likes: number };

  return (
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-black">{post.title}</div>
      <p className="text-gray-700 text-base">{post.content}</p>
      <LikeButton postId={post.id} likes={post.like} />
    </div>
  );
};

export default PostDetails;

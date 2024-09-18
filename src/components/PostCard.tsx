import { Link } from "react-router-dom";
import type { TPost } from "../types";
import type { FC } from "react";

type Props = {
  post: TPost;
};

const PostCard: FC<Props> = ({ post }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <Link to={`/post/${post.id}`}>
      <h2 className="px-6 py-4">{post.title}</h2>
      <p className="text-gray-700 text-base">{post.content}</p>
    </Link>
  </div>
);

export default PostCard;

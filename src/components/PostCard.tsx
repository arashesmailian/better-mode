import { Link } from "react-router-dom";
import type { TPost } from "../types";
import type { FC } from "react";

type Props = {
  post: TPost;
};

const PostCard: FC<Props> = ({ post }) => (
  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-blue-200 to-blue-50 p-6 hover:shadow-2xl transition-shadow duration-300">
    <Link
      to={`/post/${post.id}`}
      className="flex flex-col justify-between h-full"
    >
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
        <p className="text-gray-700 text-base truncate max-w-xs">
          {post.textContent}
        </p>
      </div>
      <div className="mt-4 text-gray-900 font-medium">♡ {post.likes ?? 0}</div>
    </Link>
  </div>
);

export default PostCard;

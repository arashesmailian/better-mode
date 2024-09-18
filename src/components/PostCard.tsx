import { Link } from "react-router-dom";
import type { TPost } from "../types";

type Props = {
  post: TPost;
};

const PostCard: FC<Props> = ({ post }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <Link to={`/post/${post.id}`}>
      <h2 cla>{post.title}</h2>
      <p>{post.content}</p>
    </Link>
  </div>
);

export default PostCard;

import type { FC } from "react";
import { useLikePost } from "../hooks/useLikePost";

type LikeButtonProps = {
  postId: string;
  likes: number | null;
};
const LikeButton: FC<LikeButtonProps> = ({ postId, likes }) => {
  // const { mutate: likePost } = useLikePost(postId);

  return <button>Like ({likes ?? 0})</button>;
};

export default LikeButton;

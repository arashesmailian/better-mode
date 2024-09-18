import type { FC } from "react";
import { useLikePost } from "../hooks/useLikePost";

type LikeButtonProps = {
  postId: string;
  likes: number;
};
const LikeButton: FC<LikeButtonProps> = ({ postId, likes }) => {
  const { mutate: likePost } = useLikePost(postId);

  return <button onClick={() => likePost({ postId })}>Like ({likes})</button>;
};

export default LikeButton;

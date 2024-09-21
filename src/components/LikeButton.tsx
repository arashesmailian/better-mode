import { type FC } from "react";
import { useReaction } from "../hooks/useReaction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { usePost } from "../hooks/usePost";

type LikeButtonProps = {
  postId: string;
  likes: number | null;
};
const LikeButton: FC<LikeButtonProps> = ({ postId, likes }) => {
  const { addReaction, removeReaction, loading } = useReaction();
  const { refetch } = usePost(postId);

  console.log(likes);

  const handleReaction = () => {
    if (likes) {
      removeReaction(postId).then(() => {
        refetch();
      });
    } else {
      addReaction(postId).then(() => {
        refetch();
      });
    }
  };

  return (
    <button
      onClick={handleReaction}
      className="flex items-center space-x-2 text-gray-500 hover:text-red-500 focus:outline-none bg-transparent border-none"
    >
      {loading ? (
        "..."
      ) : (
        <FontAwesomeIcon
          icon={likes ? faHeartSolid : faHeartOutline}
          className={likes ? "text-red-500" : ""}
        />
      )}
    </button>
  );
};

export default LikeButton;

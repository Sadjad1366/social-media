import { MdOutlineThumbUp } from "react-icons/md";
import type { Comment } from "../../api/comments/type";

const DisplayComment: React.FC<Comment> = (comment) => {
  return (
    <div key={comment.id} className="bg-blue-500 p-2 m-3 rounded-lg">
      <div>
        <p className="text-2xl font-semibold">{comment.body}</p>
        <div className="flex items-center gap-x-3">
          <MdOutlineThumbUp />
          {comment.likes}
        </div>
        <p>username: {comment.user.username}</p>
        <p>{comment.user.fullName}</p>
      </div>
    </div>
  );
};
export default DisplayComment;
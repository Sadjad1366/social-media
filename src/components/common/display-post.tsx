import { useNavigate } from "react-router";
import type { PostDetailRes } from "../../api/posts/type";

const DisplayPost: React.FC<PostDetailRes> = (post) => {
    
    const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/posts/${post.id}`)}
      className="bg-slate-200 flex flex-col rounded-md shadow-lg p-2"
      key={post.id}
    >
      <p className="font-semibold line-clamp-1">{post.title}</p>
      <p className="my-7 line-clamp-3">{post.body}</p>
      <div className="w-full flex gap-x-3">
        {post.tags.map((tag) => (
          <span
            className="bg-slate-400 text-xs rounded-full p-1 text-[white]"
            key={tag}
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
export default DisplayPost;

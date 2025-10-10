import type { PostDetailRes } from "../../api/posts/type";
import { MdOutlineThumbDown, MdOutlineThumbUp } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";

const DisplayPostDetail: React.FC<PostDetailRes> = (post) => {
    

  return (
      <div className="space-y-3 p-2 bg-cyan-200 m-3 rounded-xl">
        <p className="text-2xl font-semibold">{post?.title}</p>
        <p>{post?.body}</p>
        <div className="flex gap-x-3">
          {post?.tags.map((tag) => (
            <p
              key={tag}
              className=" bg-emerald-600 p-3 rounded-full text-white"
            >
              #{tag}
            </p>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-x-3">
            <div className="flex justify-center items-center gap-x-1 p-3">
              <MdOutlineThumbUp />
              {post?.reactions.likes}
            </div>
            <div className="flex justify-center items-center gap-x-1 p-3">
              <MdOutlineThumbDown />
              {post?.reactions.dislikes}
            </div>
          </div>
          <div className="flex justify-center items-center gap-x-1 p-3">
            <AiOutlineEye />
            {post?.views}
          </div>
        </div>
      </div>
  );
};
export default DisplayPostDetail;

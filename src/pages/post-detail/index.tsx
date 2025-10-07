import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getPostDetail } from "../../api/posts/post-api";
import { MdOutlineThumbDown, MdOutlineThumbUp } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";

const PostDetailPage = () => {

  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["post-detail"],
    queryFn: () => getPostDetail(Number(id)),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-3 p-2 bg-cyan-200 m-3 rounded-xl">
      <p className="text-2xl font-semibold">{data?.title}</p>
      <p>{data?.body}</p>
      <div className="flex gap-x-3">
        {data?.tags.map((tag) => (
          <p key={tag} className=" bg-emerald-600 p-3 rounded-full text-white">
            #{tag}
          </p>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-x-3">
          <div className="flex justify-center items-center gap-x-1 p-3">
            <MdOutlineThumbUp />
            {data?.reactions.likes}
          </div>
          <div className="flex justify-center items-center gap-x-1 p-3">
            <MdOutlineThumbDown />
            {data?.reactions.dislikes}
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-1 p-3">
          <AiOutlineEye />
          {data?.views}
        </div>
      </div>
    </div>
  );
};
export default PostDetailPage;

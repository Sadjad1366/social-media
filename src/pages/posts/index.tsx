import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../api/posts/post-api";
import { useNavigate } from "react-router";

const PostsPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const navigate = useNavigate()

  if (isLoading) return <div>Loading...</div>;

  const dataSource = data?.posts || [];

  console.log(data?.posts);

  return (
    <div className="p-2 grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
      {dataSource?.map((post) => (
        <div onClick={() => navigate(`/posts/${post.id}`)}
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
      ))}
    </div>
  );
};
export default PostsPage;

import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../api/posts/post-api";
import { useNavigate } from "react-router";
import DisplayPost from "../../components/common/display-post";

const PostsPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;

  const dataSource = data?.posts || [];

  return (
    <>
      <button
        onClick={() => navigate("/posts/create-post")}
        className="bg-blue-400 text-[white] rounded-xl p-2 my-4"
      >
        Create Post
      </button>
      <div className="p-2 grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
        {dataSource?.map((post) => (
          <DisplayPost key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};
export default PostsPage;

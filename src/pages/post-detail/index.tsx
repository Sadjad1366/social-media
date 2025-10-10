import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getPostDetail } from "../../api/posts/post-api";
import { MdOutlineThumbDown, MdOutlineThumbUp } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { getCommentsById } from "../../api/comments/comment-api";
import { useState } from "react";

const PostDetailPage = () => {
  const [displayComments, setDisplayComments] = useState<boolean>(false);
  const { id } = useParams();
  const { data: postData, isLoading: isPostLoading } = useQuery({
    queryKey: ["post-detail"],
    queryFn: () => getPostDetail(Number(id)),
  });

  const postId = postData?.id;

  const { data: commentsData, isLoading: isCommentsLoading } = useQuery({
    queryKey: ["comments-postId"],
    queryFn: () => getCommentsById(Number(postId)),
  });

  if (isPostLoading) return <div>Loading...</div>;

  if (isCommentsLoading) return <div>commentsLoading...</div>;

  const dataSource = commentsData?.comments || [];

  const toggleDisplay = (prev: boolean) => setDisplayComments(!prev);

  return (
    <>
      <div className="space-y-3 p-2 bg-cyan-200 m-3 rounded-xl">
        <p className="text-2xl font-semibold">{postData?.title}</p>
        <p>{postData?.body}</p>
        <div className="flex gap-x-3">
          {postData?.tags.map((tag) => (
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
              {postData?.reactions.likes}
            </div>
            <div className="flex justify-center items-center gap-x-1 p-3">
              <MdOutlineThumbDown />
              {postData?.reactions.dislikes}
            </div>
          </div>
          <div className="flex justify-center items-center gap-x-1 p-3">
            <AiOutlineEye />
            {postData?.views}
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => toggleDisplay(displayComments)}
          className="bg-blue-300 text-white p-2 m-3 rounded-lg"
        >
          {!displayComments ? "Show Comments" : "Hide Comments"}
        </button>
        {displayComments && (
          <div>
            {dataSource?.map((comment) => (
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
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default PostDetailPage;

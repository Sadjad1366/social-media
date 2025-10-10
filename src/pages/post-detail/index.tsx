import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getPostDetail } from "../../api/posts/post-api";
import { getCommentsById } from "../../api/comments/comment-api";
import { useState } from "react";
import DisplayComment from "../../components/common/display-comment";
import DisplayPostDetail from "../../components/common/display-post-detail";

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

  if (isPostLoading || isCommentsLoading) return <div>Loading...</div>;

  const comments = commentsData?.comments || [];

  const toggleDisplay = (prev: boolean) => setDisplayComments(!prev);

  return (
    <>
      {postData && <DisplayPostDetail {...postData} />}
      <div>
        <button
          onClick={() => toggleDisplay(displayComments)}
          className="bg-blue-300 text-white p-2 m-3 rounded-lg"
        >
          {!displayComments ? "Show Comments" : "Hide Comments"}
        </button>
        {displayComments && (
          <div>
            {comments?.map((comment) => (
              <DisplayComment key={comment.id} {...comment} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default PostDetailPage;

"use client";
import { getPostByIdApi } from "@/api/posts/post.services.api";
import { PostDetailCard } from "@/components/post/post-detail-card";
import { useQuery } from "@tanstack/react-query";

export default function SinglePostPage({
  params,
}: {
  params: { postId: number };
}) {
  const { postId } = params;

  const { data: dataSource, isLoading } = useQuery({
    queryKey: ["singlepost"],
    queryFn: () => getPostByIdApi(postId),
  });

  console.log("data is: ", dataSource);

  if (isLoading) return <>Loading...</>;

  if (!dataSource) return <>No post Found</>;

  return (
    <PostDetailCard post={dataSource}
 
    />
  );
}

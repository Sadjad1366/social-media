"use client";

import { getPostsApi } from "@/apis/post.services.api";
import { useQuery } from "@tanstack/react-query";
// import {GetPostsTypeRes} from "@/types/index"

// type RecordType = GetPostsTypeRes['data'][number]

export default function PostsPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostsApi,
  });

  if (isLoading) return <>Loading...</>;

  
  const posts = data?.posts || []; 

  console.log("data is: ", posts);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

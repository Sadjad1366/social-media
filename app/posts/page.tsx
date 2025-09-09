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
    <div className="w-full container gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto p-3 bg-slate-50">
      {posts.map((post) => (
        <div key={post.id} className="bg-white w-full h-full max-h-[700px] rounded-lg p-2 shadow-md" >
          <h2 className="font-semibold text-lg line-clamp-1 text-gray-300 text-ellipsis">{post.title}</h2>
          <p className="text-sm line-clamp-3 text-ellipsis">{post.body}</p>
        </div>
      ))}
    </div>
  );
}

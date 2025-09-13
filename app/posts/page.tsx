"use client";

import { getPostsApi } from "@/api/posts/post.services.api";
import { ButtonKit } from "@/components/kit/button";
import { PostCard } from "@/components/post/post-card";
import { classNames } from "@/utils/classname";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function PostsPage() {
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostsApi,
  });

  if (isLoading) return <>Loading...</>;

  const posts = data?.posts ?? [];

  const onClickHandler = (id: number) => {
    router.push(`/posts/${id}`);
  };

  return (
    <>
      <ButtonKit className="m-3 p-2 text-white bg-blue-400" content="CREATE POST" />
      <div
        className={classNames(
          "w-full container grid gap-4",
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
          "mx-auto p-3 bg-slate-50"
        )}
      >
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={{ ...post, onClickFunc: onClickHandler }}
          />
        ))}
      </div>
    </>
  );
}

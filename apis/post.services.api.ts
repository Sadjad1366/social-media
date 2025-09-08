import { urls } from "@/urls"
import { client } from "./client"
import { GetPostsTypeRes } from "@/types";

export const getPostsApi = async():Promise<GetPostsTypeRes> => {
   const response = client.get(urls.posts.getPosts());
   return (await response).data;
}
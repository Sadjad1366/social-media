import { urls } from "@/urls"
import { client } from "./client"
import { GetPostsTypeRes } from "@/types";

type getPostApiFuncType = () => Promise<GetPostsTypeRes>

export const getPostsApi:getPostApiFuncType = async () => {
   const response = await client.get(urls.posts.getPosts());   
   return response.data;
}
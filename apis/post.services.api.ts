import { URLS } from "@/urls"
import { client } from "./client"
import { GetPostsTypeRes } from "@/types";



//========================= GET ALL POSTS ===================
type getPostApiFuncType = () => Promise<GetPostsTypeRes>

export const getPostsApi:getPostApiFuncType = async () => {
   const response = await client.get(URLS.posts.getPosts());   
   return response.data;
}

//========================= CREATE POSTS ===================

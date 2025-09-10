import { URLS } from "@/urls"
import { GetAllPostsTypeRes, GetPostById } from "@/types";
import { client } from "../_config/client";



//========================= GET ALL POSTS ===================
type GetPostApiFuncType = () => Promise<GetAllPostsTypeRes>

export const getPostsApi:GetPostApiFuncType = async () => {
   const response = await client.get(URLS.posts.getPosts());   
   return response.data;
}

//========================= GET A SINGLE POST ===================

type GetPostByIdApiFuncType = (id:number) => Promise<GetPostById>

export const getPostByIdApi:GetPostByIdApiFuncType = async(id) => {
   const response = await client.get(URLS.posts.getSinglePost(id));
   return response.data
}
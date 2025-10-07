import client from "../_config/client";
import { endpoints } from "./endpoints";
import type { PostDetailRes, AllPostsResponse, CreatePostReq, CreatePostRes } from "./type";

export const getPosts = async () => {
  const response = await client.get<AllPostsResponse>(endpoints.getAllPosts());
  return response.data;
};

export const getPostDetail = async(id:number) => {
  const response = await client.get<PostDetailRes>(endpoints.postDetail(id));
  return response.data
}

export const createPost = async(payload: CreatePostReq) => {
  const response = await client.post<CreatePostRes>(endpoints.createPost(), payload);
  return response.data;
}

import client from "../_config/client";
import { endpoints } from "./endpoints";
import type { PostDetailRes, PostResponse } from "./type";

type GetAllPostsFuncType = () => Promise<PostResponse>;
export const getPosts: GetAllPostsFuncType = async () => {
  const response = await client.get(endpoints.getAll);
  return response.data;
};

type GetPostDetailFuncType = (id: number) => Promise<PostDetailRes>;
export const getPostDetail:GetPostDetailFuncType = async(id) => {
  const response = await client.get(endpoints.postDetail(id));
  return response.data
}

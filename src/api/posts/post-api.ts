import client from "../_config/client";
import { endpoints } from "./endpoints";
import type { PostResponse } from "./type";

type GetAllPosts = () => Promise<PostResponse>;
export const getPosts: GetAllPosts = async () => {
  const response = await client.get(endpoints.getAll);
  return response.data;
};

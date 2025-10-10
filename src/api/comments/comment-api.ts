import client from "../_config/client"
import { endpoints } from "./endpoints"
import type { GetAllCommentsByPostId } from "./type"

export const getCommentsById = async(id:number) => {
    const response = await client.get<GetAllCommentsByPostId>(endpoints.comments.byId(id))
    return response.data;
}
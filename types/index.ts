// import { GeneralApiResponse } from "./globals";

// export type GetPostsTypeRes = GeneralApiResponse<{
//   id: number;
//   title: string;
//   body: string;
//   tags: string[];
//   reactions: {
//     likes: number;
//     dislikes: number;
//   };
//   views: number;
//   userId: number;
// }>;

export type GetPostsTypeRes = {
posts: { id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  },
  views: number;
  userId: number;
}[],
total:number;
skip: number;
limit: number;
}



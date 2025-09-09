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
  posts: {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
      likes: number;
      dislikes: number;
    };
    views: number;
    userId: number;
  }[];
  total: number;
  skip: number;
  limit: number;
};

//==================== Login ============================
export interface ILoginReq {
  username: string;
  password: string;
  expiresInMins?: number;
}

export interface ILoginRes {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string; // JWT accessToken (for backward compatibility) in response and cookies
  refreshToken: string; // refreshToken in response and cookies
}

//====================  ============================

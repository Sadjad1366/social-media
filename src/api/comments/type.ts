export type GetAllCommentsByPostId = {
  comments: Comment[];
  total: number;
  skip: number;
  limit: number;
};

export type Comment = {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: {
    id: number;
    username: string;
    fullName: string;
  };
};

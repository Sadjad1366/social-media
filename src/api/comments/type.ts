export type GetAllCommentsByPostId = {
  comments: [
    {
      id: number;
      body: string;
      postId: number;
      likes: number;
      user: {
        id: number;
        username: string;
        fullName: string;
      };
    }
  ];
  total: number;
  skip: number;
  limit: number;
};

export const endpoints = {
    getAllPosts:() => '/posts',
    postDetail: (id: number) => `/posts/${id}`,
    createPost: () => '/posts/add',

}
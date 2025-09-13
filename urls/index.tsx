export const URLS = {
    posts: {
        getPosts: () => '/posts',
        getSinglePost: (id:number) => `/posts/${id}`,
        createPost: () => '/posts/add',
    },
    login: {
        getLogin: () => '/auth/login'
    }
}
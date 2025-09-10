export const URLS = {
    posts: {
        getPosts: () => '/posts',
        getSinglePost: (id:number) => `/posts/${id}`
    },
    login: {
        getLogin: () => '/auth/login'
    }
}
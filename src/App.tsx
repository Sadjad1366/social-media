import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/root";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactUsPage from "./pages/contact-us";
// import LoginPage from "./pages/login";
import PostsPage from "./pages/posts";
import PostDetailPage from "./pages/post-detail";
// import PostLayOut from "./components/post-layout";
import CreatePostPage from "./pages/create-post";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children: [
        { index: true, Component: HomePage },
        { path: "about", Component: AboutPage },
        { path: "contact-us", Component: ContactUsPage },
        // { path: "login", Component: LoginPage },
      ],
    },
    {
      path: "/posts",
            Component: Root,
      children: [
        { index: true, Component: PostsPage },
        { path: ":id", Component: PostDetailPage },
        { path: "create-post", Component: CreatePostPage },
      ],
    },
  ]);
  return <RouterProvider router={browserRouter} />;
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/root";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactUsPage from "./pages/contact-us";
import LoginPage from "./pages/login";
import PostsPage from "./pages/posts";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children: [
        { index: true, Component: HomePage },
        { path: "about", Component: AboutPage },
        { path: "contact-us", Component: ContactUsPage },
        { path: "login", Component: LoginPage },
      ],
    },
    {
      path: "/posts",
      children: [
        { index: true, Component: PostsPage },
        // { path: "about", Component: AboutPage },
        // { path: "contact-us", Component: ContactUsPage },
      ],
    },
  ]);
  return <RouterProvider router={browserRouter} />;
}

export default App;

import { createHashRouter, RouterProvider } from "react-router-dom";
import SSRBlog from "./blog/posts/ssr/ssr_blog";
import Portfolio from "./portfolio/potfolio";

const router = createHashRouter([
    {
        path: "/sites",
        children: [
            {
                path: "blog",
                children: [
                    {
                        path: "ssr-blog",
                        element: <SSRBlog />
                    }
                ]
            },
        ]
    },
    {
        path: "/",
        element: <Portfolio />,
    }
])

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;

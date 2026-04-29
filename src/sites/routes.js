import { createHashRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./Portfolio/potfolio";
import { blogPosts } from "./blog/blogPosts";

const blogRoutes = blogPosts.map((blogPosts) => ({
  path: `blog/${blogPosts.path}`,
  lazy: blogPosts.lazy,
}));

const router = createHashRouter([
	{
		path: "/sites",
		children: [
			...blogRoutes,
		],
	},
	{
		path: "/",
		element: <Portfolio />,
	},
]);

function Router() {
	return <RouterProvider router={router} />;
}

export default Router;

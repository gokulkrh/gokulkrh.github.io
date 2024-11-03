import { createHashRouter, RouterProvider } from "react-router-dom";
import SSRBlog from "./blog/posts/ssr/ssr_blog";
import AmfossTasks from "./blog/posts/technology/personal_projects/amfoss-tasks/amfoss_tasks";
// import Portfolio from "./Portfolio/potfolio";

const router = createHashRouter([
	{
		path: "/sites",
		children: [
			{
				path: "blog",
				children: [
					{
						path: "ssr-blog",
						element: <SSRBlog />,
					},
					{
						path: "",
						element: <SSRBlog />,
					},
					{
						path: "tech-projects",
						children: [
							{
								path: "",
								element: <SSRBlog />,
							},
							{
								path: "mental-health-assessment",
								element: <SSRBlog />,
							},
							{
								path: "youtube-comments-summarizer",
								element: <SSRBlog />,
							},
							{
								path: "food-image-to-recipe-converter",
								element: <SSRBlog />,
							},
							{
								path: "snake-game",
								element: <SSRBlog />,
							},
							{
								path: "unicode-artist",
								element: <SSRBlog />,
							},
							{
								path: "kissan-market-india",
								element: <SSRBlog />,
							},
							{
								path: "3js-portfolio",
								element: <SSRBlog />,
							},
							{
								path: "amfoss-tasks",
								element: <AmfossTasks />,
							},
						],
					},
				],
			},
		],
	},
	// {
	// 	path: "/",
	// 	element: <Portfolio />,
	// },
]);

function Router() {
	return <RouterProvider router={router} />;
}

export default Router;

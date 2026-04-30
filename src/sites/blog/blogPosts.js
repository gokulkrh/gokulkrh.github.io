export const blogPosts = [
  {
    path: "amfoss-tasks",
    lazy: async () => {
      const module = await import("./posts/amfoss-tasks");
      return { Component: module.default };
    }
  },
  {
    path: "ssr-blog",
    lazy: async () => {
      const module = await import("./posts/ssr");
      return { Component: module.default };
    }
  },
];

#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const blogPath = process.argv[2];

if (!blogPath) {
  console.log("Bro at least give a blog name 💀");
  process.exit(1);
}

const registryPath = path.join(
  process.cwd(),
  "src/sites/blog/blogPosts.js"
);

let registryContent = fs.readFileSync(registryPath, "utf-8");

if (registryContent.includes(`path: "${blogPath}"`)) {
  console.log("This blog already exists bro 💀");
  process.exit(1);
}

const postsRoot = path.join(
  process.cwd(),
  "src/sites/blog/posts"
);

const fullBlogPath = path.join(postsRoot, blogPath);

fs.mkdirSync(fullBlogPath, { recursive: true });
fs.mkdirSync(path.join(fullBlogPath, "images"), {
  recursive: true,
});


// blog-topic/part1 -> BlogTopicPart1
const componentName = blogPath
  .split(/[\\/]/)
  .flatMap(part => part.split('-'))
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join('');


// Calculate relative path to common/style.css
const relativeToCommon = path
  .relative(
    fullBlogPath,
    path.join(process.cwd(), "src/sites/blog/common")
  )
  .replace(/\\/g, '/');

const componentTemplate = `import { Fragment } from "react";
import "${relativeToCommon}/style.css";

export default function ${componentName}() {
  return (
    <Fragment>
      <h1>${componentName}</h1>
    </Fragment>
  );
}
`;

fs.writeFileSync(
  path.join(fullBlogPath, "index.jsx"),
  componentTemplate
);

const newEntry = `  {
    path: "${blogPath}",
    lazy: async () => {
      const module = await import("./posts/${blogPath}");
      return { Component: module.default };
    }
  },`;

registryContent = registryContent.replace(
  /\];/,
  `${newEntry}\n];`
);

fs.writeFileSync(registryPath, registryContent);

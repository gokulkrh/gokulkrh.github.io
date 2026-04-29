#!/usr/bin/env node


import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const blogName = process.argv[2];


if (!blogName) {
    console.log("Bro at least give a blog name 💀");
    process.exit(1);
}

const registryPath = path.join(process.cwd(), "src/sites/blog/blogPosts.js");

let registryContent = fs.readFileSync(registryPath, "utf-8");

if (registryContent.includes(`path: "${blogName}"`)) {
  console.log("This blog already exists bro 💀");
  process.exit(1);
}

const basePath = path.join(process.cwd(), `src/sites/blog/posts/${blogName}`);


fs.mkdirSync(basePath, { recursive: true });
// fs.mkdirSync(path.join(basePath, 'styles'), { recursive: true });
fs.mkdirSync(path.join(basePath, 'images'), { recursive: true });


const componentName = blogName
 .split('-')
 .map(w => w[0].toUpperCase() + w.slice(1))
 .join('');


console.log(componentName)


const componentTemplate = `import { Fragment } from "react";
import './styles.css';

export default function ${componentName}() {
    return (
        <Fragment>
            <h1>${blogName}</h1>
        </Fragment>
    );
}
`;


fs.writeFileSync(
    path.join(basePath, 'styles.css'),
    `/* ${blogName} styles */`
);


fs.writeFileSync(
    path.join(basePath, 'index.jsx'),
    componentTemplate
);

const newEntry = `  {
    path: "${blogName}",
    lazy: async () => {
      const module = await import("./posts/${blogName}");
      return { Component: module.default };
    }
  },`;

registryContent = registryContent.replace(
  /\];/,
  `${newEntry}\n];`
);

fs.writeFileSync(registryPath, registryContent);
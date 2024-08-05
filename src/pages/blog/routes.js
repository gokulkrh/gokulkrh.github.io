import React from "react";
import { Routes, Route } from "react-router-dom";
import SSRBlog from "./posts/ssr/ssr_blog";

const BlogRoutes = () => {
    return (
    <Routes>
        <Route path="posts/*">
            <Route path="ssr" element={SSRBlog}/>
        </Route>
    </Routes>)
}

export default BlogRoutes;
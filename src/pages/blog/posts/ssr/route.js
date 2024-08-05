import React from "react";
import { Router, Route } from "react-router-dom";
import SSRBlog from "./ssr_blog";

const SSRBlogRoute = () => {
    return (
    <Router>
        <Route path="/ssr" element={<SSRBlog />} />
    </Router>)
};

export default SSRBlogRoute;
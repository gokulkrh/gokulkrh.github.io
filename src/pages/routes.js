import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogRoutes from "./blog/routes";
// import Portfolio from "./portfolio/potfolio";

const PageRoutes = () => {
    return (
    <Routes>
        <Route path="/blog/*" element={<BlogRoutes />} />
    </Routes>)
}

export default PageRoutes;
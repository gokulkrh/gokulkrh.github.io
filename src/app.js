import React from "react"
import Router from "./sites/routes";
// import SSRBlog from "./pages/SSR-Blog/ssr_blog";
// import PageRoutes from "./pages/routes";

function App() {
  return (
    <React.Fragment>
      <Router />
      {/* <RouterProvider router={router}/> */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/" element={<Portfolio />} />
          <Route path="/SSR-Blog" element={<SSRBlog />} />
        </Routes>
      </Router> */}
    </React.Fragment>
  );
}

export default App;

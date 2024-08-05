import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import Portfolio from "./pages/Portfolio/potfolio";
// import SSRBlog from "./pages/SSR-Blog/ssr_blog";
import PageRoutes from "./pages/routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<PageRoutes />} />
          {/* <Route path="/" element={<Portfolio />} />
          <Route path="/SSR-Blog" element={<SSRBlog />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

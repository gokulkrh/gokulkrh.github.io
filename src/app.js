import { Routes, Route } from "react-router-dom";
import SSRBlog from "./pages/SSR-Blog/ssr_blog";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/SSR-Blog" element={<SSRBlog />} />
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SSRBlog from "./pages/SSR-Blog/ssr_blog";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename="/gokulkrh.github.io">
        <Routes>
          <Route path="/SSR-Blog" element={<SSRBlog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

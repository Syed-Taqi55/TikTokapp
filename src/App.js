import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GetPage from "./getVideo";
import PostPage from "./postvideo";
import AuthPage from "./AuthPage";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">🏠 Home</Link> |{" "}
        <Link to="/videos">📹 View Videos</Link> |{" "}
        <Link to="/post">📝 Post Video</Link>
      </nav>

      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/videos" element={<GetPage />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </Router>
  );
}

export default App;

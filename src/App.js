import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

import Blogs from "./pages/Blogs";
import Sprint1 from "./pages/Blogs/Sprint1";
import Sprint2 from "./pages/Blogs/Sprint2";
import Layout from "./pages/Blogs/Layout";

function App() {
  return (
    <>
      <BrowserRouter basename="/SanghSangai">
        {/* <HashRouter> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          {/* <Route path="/blogs/1" element={<Sprint1 />} />
          <Route path="/blogs/2" element={<Sprint2 />} /> */}
          <Route path="/blogs/:slug" element={<Layout />} />
        </Routes>
        {/* </HashRouter> */}
      </BrowserRouter>
    </>
  );
}

export default App;

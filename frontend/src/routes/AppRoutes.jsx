import { Routes, Route } from "react-router-dom";

import NoMatch from "../pages/NoMatch";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import DetailedProject from "../pages/DetailedProject";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projets" element={<Projects />} />
      <Route path="/projet/:id" element={<DetailedProject />} />
      <Route path="/no-match" element={<NoMatch />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default AppRoutes;

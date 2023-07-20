import { Routes, Route } from "react-router-dom";

import NoMatch from "../pages/NoMatch";
import Home from "../pages/Home";
import Projets from "../components/Projets";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projets" element={<Projets />} />
      <Route path="/no-match" element={<NoMatch />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default AppRoutes;

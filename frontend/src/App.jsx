import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

import "./index.css";

function App() {
  return (
    <div className="relative">
      <div className="sticky top-0 w-full z-50">
        <Navbar />
      </div>
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;

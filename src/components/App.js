import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./Routes";

import Footer from "./Footer";
import "./App.scss";

function App() {
  const location = useLocation();
  return (
    <div className="BAD t-body">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

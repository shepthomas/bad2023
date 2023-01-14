import { Routes, Route, useLocation, Link } from "react-router-dom";
import { Home, WhatsOn } from "./Routes";

import Footer from "./Footer";
import "./App.scss";

function App() {
  const location = useLocation();
  return (
    <div className="BAD t-body">
      <section>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/whats-on">What's on</Link>
          </li>
        </ul>
      </section>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/whats-on" element={<WhatsOn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

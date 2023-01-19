import { Routes, Route, useLocation } from "react-router-dom";
import { Home, WhatsOn, Event } from "./Routes";
import Nav from "./Nav";
import Footer from "./Footer";
import "./App.scss";

function App() {
  const location = useLocation();
  return (
    <div className="BAD t-body">
      <Nav />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/whats-on" element={<WhatsOn />} />
        <Route path="/events/:id" element={<Event />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

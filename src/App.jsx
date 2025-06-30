import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Home,
  Doctor,
  Services,
  About,
  Contact,
  Testimonial,
  Apps,
  Dashboard,
  Product,
} from "./pages/index";
import { Navbar, Footer } from "./components";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;

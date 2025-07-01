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
import Layout from "./layout/Layout";
import { NotFound } from "./components";
const App = () => {
  return (
    <>
      <Router>
        <Layout>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;

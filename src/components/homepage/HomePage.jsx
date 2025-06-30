import React from 'react'
import { Navbar } from '../index.jsx'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Product,
  Doctor,
  Apps,
  Services,
  Testimonial,
  Dashboard,
} from "../../pages/index.jsx";

const HomePage = () => {
  return (
   <section>
    <Navbar />
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/doctor" element={<Doctor />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/testimonial" element={<Testimonial />}/>
        <Route path="/apps" element={<Apps />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/product" element={<Product />}/>
      </Routes>
    </Router>
   </section>
  )
}

export default HomePage

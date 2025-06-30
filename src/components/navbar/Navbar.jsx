import React from 'react'
import Styles from './Navbar.module.css'
import { link } from 'react-router-dom'

const Navbar = () => {
  return (
   <section className="container">
    <nav>
      <h1>Logo</h1>
      <ul className={Styles.navLists}>
        <li className={Styles.navList}>
          <link to="/">Home</link>
        </li>
        <li className={Styles.navList}>
          <link to="/doctor">Find a Doctor</link>
        </li>
        <li className={Styles.navList}>
          <link to="/apps">Apps</link>
        </li>
        <li className={Styles.navList}>
          <link to="/testimonial">Testimonials</link>
        </li>
        <li className={Styles.navList}>
          <link to="/about us">About Us</link>
        </li>
        <li className={Styles.navList}>
          <link to="/contact us">Contact Us</link>
        </li>
        <li className={Styles.navList}>
          <link to="/services">Services</link>
        </li>
      </ul>
    </nav>
   </section>
  )
}

export default Navbar

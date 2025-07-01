import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { navbarData } from "../../utils/data";
import { useState } from "react";

const Navbar = () => {
  return (
    <section className="container">
      <nav>
        <section className={styles.topHero}>
          <img src="/public/logo (1).png" alt="Logo" className={styles.image} />
        </section>
        <ul className={styles.navLists}>
          {navbarData.map((item) => (
            <li className={styles.navList} key={item.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
                to={item.url}
              >
                {item.name}
              </NavLink>
            </li>
            // isActive is a function that returns true or false based on the current URL and it also add a color to the active link on your navbar
          ))}
         </ul>
        <div className={styles.icons}>
          <VscMenu />
          <VscChromeClose />
        </div>
      </nav>
    </section>
  );
};
export default Navbar;

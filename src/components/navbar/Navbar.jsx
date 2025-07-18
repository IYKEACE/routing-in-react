import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import styles from "./navbar.module.css";

import { navbarData } from "../../utils/data";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  // handle location
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    setMenuOpen((prev) => !prev);
  }, [location]);

  return (
    <section className="container">
      <nav>
        <section className={styles.topHero}>
          <img src="/logo (1).png" alt="Logo" className={styles.image} />
        </section>
        {/* Mobile menu icon */}
        <div className={styles.icons} onClick={handleMenuToggle}>
          {menuOpen ? <VscChromeClose /> : <VscMenu />}
        </div>
        {/* Nav links */}
        <ul className={`${styles.navLists} ${menuOpen ? styles.showMenu : ""}`}>
          {navbarData.map((item) => (
            <li className={styles.navList} key={item.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
                to={item.url}
                onClick={() => setMenuOpen(false)} // close menu on link click activeLink
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
export default Navbar;

// import { NavLink } from "react-router-dom";
// import styles from "./navbar.module.css";
// import { VscMenu, VscChromeClose } from "react-icons/vsc";
// import { navbarData } from "../../utils/data";
// import { useState } from "react";

// const Navbar = () => {
//   return (
//     <section className="container">
//       <nav>
//         <section className={styles.topHero}>
//           <img src="/public/logo (1).png" alt="Logo" className={styles.image} />
//         </section>
//         <ul className={styles.navLists}>
//           {navbarData.map((item) => (
//             <li className={styles.navList} key={item.id}>
//               <NavLink
//                 className={({ isActive }) =>
//                   isActive ? styles.activeLink : ""
//                 }
//                 to={item.url}
//               >
//                 {item.name}
//               </NavLink>
//             </li>
//             // isActive is a function that returns true or false based on the current URL and it also add a color to the active link on your navbar
//           ))}
//         </ul>
//         <div className={styles.icons}>
//           <VscMenu />
//           <VscChromeClose />
//         </div>
//       </nav>
//     </section>
//   );
// };
// export default Navbar;

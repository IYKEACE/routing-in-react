import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

import { navbarData } from "../../utils/data";

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
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
export default Navbar;

import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";

import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={`${styles.nav}`}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/">HomePage</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <Button type="primary">Login</Button>
        {/* <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li> */}
      </ul>
    </nav>
  );
}

export default PageNav;

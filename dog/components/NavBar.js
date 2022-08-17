import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
const NavBar = () => {
  return (
    <nav className={styles.mainNav}>
      <ul>
        <li>
          <Link
            href="/"
            scroll={false}
            prefetch={false}
            replace={true}
            shallow={true}
          >
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/About" scroll={false}>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/Blog" scroll={false}>
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/Contactus" scroll={false}>
            <a>Contact Us</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;

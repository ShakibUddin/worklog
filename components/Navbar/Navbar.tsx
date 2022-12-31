import Link from "next/link";
import React from "react";
import styles from "../../styles/Navbar.module.css";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className={styles.navbar}>
      <span className={styles.title}>Worklog</span>
      <div>
        <Link className={styles.navItem} href="/">
          Home
        </Link>
        <Link className={styles.navItem} href="/about">
          About
        </Link>
      </div>
    </div>
  );
}

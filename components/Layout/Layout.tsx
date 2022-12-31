import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "../../styles/Layout.module.css";

export default function Layout(props: any) {
  return (
    <div className={styles.container}>
      <Navbar />
      {props.children}
    </div>
  );
}

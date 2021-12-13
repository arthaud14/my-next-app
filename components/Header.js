import next from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Header({ name }) {
  return (
    <div>
      <ul className={styles.header}>
        <li>
          <Link href="/">
            <a className={styles.aheader}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={styles.aheader}>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/termsofuse">
            <a className={styles.aheader}>Terms of use</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

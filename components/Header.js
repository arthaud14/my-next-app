import next from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Header({ name }) {
    return (
        <div>
            <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/termsofuse">
            <a>Terms of use</a>
          </Link>
        </li>
      </ul>
        </div>
    )


}
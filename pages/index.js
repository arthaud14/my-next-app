import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/Link";
import about from './about';
import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    console.log("index page did mount");
  }, []);
  return (
    <div className={styles.index}>
      <h1>Bienvenue sur la quête Next</h1>
     <ul>
       <li>
         <Link href="/about">
          <a>About Us</a>
        </Link>
       </li>
       <li>
         <Link href="/termsofuse">
          <a>Terms of Use</a>
        </Link>
       </li>
     </ul>
    </div>
  )
}

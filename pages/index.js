import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/Link";
import about from "./about";
import { useEffect } from "react";
import myImage from "../public/images/myImage.jpg";
import Layout from "../components/Layout";

export default function Home() {
  useEffect(() => {
    console.log("index page did mount");
  }, []);
  return (
    <div className={styles.index}>
      <Layout>
      <h1>Bienvenue sur la quête NextJs</h1>
        <Image
          src={myImage}
          height="37%"
          width="100%"
          layout="responsive"
          alt="image lac"
        />
        
      </Layout>
    </div>
  );
}

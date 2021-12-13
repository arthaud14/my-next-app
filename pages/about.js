import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import myImage2 from "../public/images/myImage2.jpg";
import Layout from "../components/Layout";

export default function about() {
  return (
    <div>
      <Layout>
      <h1 className={styles.title}>A propos</h1>
      <Image
        src={myImage2}
        layout="responsive"
        alt="image lac"
        height="37%"
        width="100%"
      />
      <div className={styles.container}>
        <p className={styles.parabout}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      </Layout>
    </div>
  );
}

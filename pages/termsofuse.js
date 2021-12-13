import styles from "../styles/Home.module.css";
// import Layout from "../components/Layout";
import { useState } from "react";

export default function TermsOfUse() {
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <>
      <h1 className={styles.title}>Termes et Conditions</h1>
      <p className={styles.container}>
        Les présentes conditions d'utilisation traduisent le fonctionnement
        de ce site, les lois qui s'appliquent à notre entreprise et certains
        principes que nous avons toujours tenus pour vrais. Par conséquent,
        ces conditions d'utilisation contribuent à définir votre relation
        avec Google lorsque vous interagissez avec nos services. Elles
        couvrent entre autres les thèmes suivants : 
      </p>
      <label htmlFor="termsAccepted">Merci d'accepter</label>
      <input 
        id="termsAccepted"
        type="checkbox"
        checked={termsAccepted}
        onChange={(e) => {
          setTermsAccepted(e.target.checked);
        }}
      />
      <button
        onClick={() => {
          alert(
            termsAccepted
              ? "Merci d'avoir accepté, bon séjour ici"
              : "Game Over"
          );
        }}
      >
        OK
      </button>
      <style jsx>{`
        .terms {
          font-size: 0.3rem;
        }
      `}</style>
    </>
  );
}


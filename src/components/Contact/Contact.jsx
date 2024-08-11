import React from 'react';
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contactez-nous</h2>
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <h5>Adresse</h5>
          <p>25 Rue Pasteur, 75010 Paris</p>
        </div>
        <div className={styles.infoItem}>
          <h5>Téléphone</h5>
          <p>01 23 45 67 89</p>
        </div>
        <div className={styles.infoItem}>
          <h5>Email</h5>
          <p>contact@mert.com</p>
        </div>
        <div className={styles.infoItem}>
          <h5>Formulaire de contact</h5>
          <p>Remplissez notre formulaire en ligne pour nous faire part de votre projet. Nous vous répondrons dans les plus brefs délais.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React from 'react';
import styles from './Services.module.css';

function Services() {
  return (
    <section className={styles.services}>
      <div>
        <h2 className={styles.h2}>Nos services</h2>
        <ol className={styles.ul}>
          <li className={styles.li}>
            <h3 className={styles.h3} data-number="1">Création de sites web</h3>
            <p className={styles.p}>Que vous ayez besoin d'un site vitrine, d'un site e-commerce ou d'une application web, notre équipe d'experts saura concevoir une solution sur mesure qui reflétera parfaitement votre marque.</p>
          </li>
          <li className={styles.li}>
            <h3 className={styles.h3} data-number="2">Montage vidéo</h3>
            <p className={styles.p}>Capturer l'attention de votre public grâce à des vidéos de qualité professionnelle. Nous nous chargeons de toutes les étapes, de la prise de vue au montage final.</p>
          </li>
          <li className={styles.li}>
            <h3 className={styles.h3} data-number="3">Photoshop et retouche d'images</h3>
            <p className={styles.p}>Améliorez l'apparence de vos images et de vos visuels avec nos services de retouche photo. Nous vous aiderons à obtenir des résultats impeccables.</p>
          </li>
          <li className={styles.li}>
            <h3 className={styles.h3} data-number="4">Marketing numérique</h3>
            <p className={styles.p}>Augmentez la visibilité de votre entreprise en ligne grâce à nos stratégies de marketing numérique sur mesure. Nous vous aiderons à attirer de nouveaux clients et à fidéliser les existants.</p>
          </li>
        </ol>
      </div>
      <img src='logo1.jpg' alt='Logo' />
    </section>
  );
}

export default Services;

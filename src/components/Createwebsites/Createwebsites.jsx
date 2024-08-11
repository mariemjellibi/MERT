import React from 'react';
import styles from './Createwebsites.module.css';

const Createwebsites = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Création de sites web</h2>
        <div className={styles.info1}>
          <div className={styles.number}>1</div>
          <div>
            <h4>Planification</h4>
            <p>
              Nous commençons par comprendre vos objectifs,<br />
              votre public cible et vos exigences.<br />
              Ensemble, nous établissons un plan détaillé <br />
              pour votre nouveau site web.
            </p>
          </div>
        </div>
        <div className={styles.info1}>
          <div className={styles.number}>2</div>
          <div>
            <h4>Conception</h4>
            <p>
              Nos designers créent un design attrayant et intuitif qui reflète parfaitement votre marque. Nous veillons à ce que l'expérience utilisateur soit optimale.
            </p>
          </div>
        </div>
        <div className={styles.info1}>
          <div className={styles.number}>3</div>
          <div>
            <h4>Développement</h4>
            <p>
              Nos développeurs web transforment votre design en un site web fonctionnel, rapide et sécurisé. Nous utilisons les dernières technologies pour vous garantir des résultats de qualité.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img src='image.avif' alt="Création de sites web" />
      </div>
    </div>
  );
};

export default Createwebsites;

import React, { useState } from 'react';
import styles from './Marketing.module.css';

const Marketing = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <img src='image3.avif' alt='Marketing' />
      <div className={styles.info}>
        <div onClick={() => toggleContent(0)}>
          <div className={`${styles.icon} ${activeIndex === 0 ? styles.active : ''}`}></div>
          <h4>Stratégie sur mesure</h4>
          <p className={`${activeIndex === 0 ? styles.show : ''}`}>
            Nous élaborerons une stratégie de marketing numérique personnalisée pour votre entreprise, en nous concentrant sur les canaux les plus pertinents pour atteindre vos objectifs.
          </p>
        </div>
        <div onClick={() => toggleContent(1)}>
          <div className={`${styles.icon} ${activeIndex === 1 ? styles.active : ''}`}></div>
          <h4>Création de contenu engageant</h4>
          <p className={`${activeIndex === 1 ? styles.show : ''}`}>
            Nos équipes de rédaction et de graphisme créeront du contenu attrayant et de qualité pour vous aider à vous démarquer sur le web.
          </p>
        </div>
        <div onClick={() => toggleContent(2)}>
          <div className={`${styles.icon} ${activeIndex === 2 ? styles.active : ''}`}></div>
          <h4>Analyse et optimisation</h4>
          <p className={`${activeIndex === 2 ? styles.show : ''}`}>
            Nous suivrons attentivement les performances de vos campagnes et les ajusterons en permanence pour maximiser leur efficacité.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Marketing;

import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.h1}>Bienvenue sur Mert</h1>
      <p className={styles.p}>Mert est une entreprise créative spécialisée dans le développement web,<br/>
       la création de contenu vidéo, la retouche d'images et le marketing numérique.<br />
       Laissez-nous vous aider à porter votre projet en ligne !</p>
    <div className={styles.buttons}>
           <button className={styles.button1}>Découvrir nos services</button>
      <button className={styles.button2}>Nous contacter</button>
    </div>

    </section>
  );
};

export default Hero;

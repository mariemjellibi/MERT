import React from 'react';
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.container}>
      <h1>Qui sommes-nous ?</h1>
      <div className={styles.informations}>
        <div className={styles.q1}>
          <h4>Notre Philosophie</h4>
          <p>
            Chez Mert, nous croyons que la créativité et l'innovation sont les
            clés du succès dans le monde numérique d'aujourd'hui. Nous mettons
            tout en œuvre pour comprendre les besoins uniques de chacun de nos
            clients et leur offrir des solutions sur mesure qui les aident à se
            démarquer.
          </p>
        </div>
        <div className={styles.q1}>
          <h4>Notre Équipe</h4>
          <p>
            Notre équipe est composée de développeurs web talentueux, de
            graphistes passionnés et de spécialistes du marketing numérique
            chevronnés. Ensemble, nous formons une équipe multidisciplinaire
            capable de relever tous vos défis en ligne.
          </p>
        </div>
        <div className={styles.q1}>
          <h4>Notre Engagement</h4>
          <p>
            Nous sommes déterminés à offrir un service de qualité supérieure à
            chacun de nos clients. De la première réunion à la livraison finale,
            nous travaillons en étroite collaboration avec vous pour vous
            garantir des résultats à la hauteur de vos attentes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;

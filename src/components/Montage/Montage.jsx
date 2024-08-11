import React from 'react';
import styles from './Montage.module.css';

const Montage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src='image2.avif' alt="Montage Vidéo illustration" />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Montage vidéo</h2>
        <div className={styles.info1}>
          <div className={styles.number}>1</div>
          <div>
            <h4>Prise de vue</h4>
            <p>
              Nos caméramans expérimentés capturent vos moments les plus importants avec un œil expert.
            </p>
          </div>
        </div>
        <div className={styles.info1}>
          <div className={styles.number}>2</div>
          <div>
            <h4>Sélection du matériel</h4>
            <p>
              Nous trions et sélectionnons les meilleures séquences pour créer une histoire captivante.
            </p>
          </div>
        </div>
        <div className={styles.info1}>
          <div className={styles.number}>3</div>
          <div>
            <h4>Montage</h4>
            <p>
              Nos monteurs vidéo chevronnés assemblent les images, les sons et les effets pour donner vie à votre vision.
            </p>
          </div>
        </div>
        <div className={styles.info1}>
          <div className={styles.number}>4</div>
          <div>
            <h4>Finalisation</h4>
            <p>
              Nous peaufinerons chaque détail pour vous offrir une vidéo professionnelle et mémorable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Montage;

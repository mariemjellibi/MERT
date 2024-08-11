import React from 'react';
import styles from "./Photoshop.module.css";
import { FaPalette, FaUserEdit, FaImage, FaBrush } from 'react-icons/fa'; // Importing icons

const Photoshop = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Photoshop et retouche d'images</h1>
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <FaPalette className={styles.icon} />
          <h4>Correction des couleurs</h4>
          <p>Nos experts en retouche photo ajusteront les couleurs et la luminosité de vos images pour les rendre plus éclatantes.</p>
        </div>
        <div className={styles.infoItem}>
          <FaUserEdit className={styles.icon} />
          <h4>Retouche de portraits</h4>
          <p>Nous peaufinerons vos portraits pour les rendre encore plus beaux et naturels.</p>
        </div>
        <div className={styles.infoItem}>
          <FaImage className={styles.icon} />
          <h4>Modification d'arrière-plan</h4>
          <p>Nous pouvons facilement changer ou retoucher l'arrière-plan de vos photos pour mettre votre sujet en valeur.</p>
        </div>
        <div className={styles.infoItem}>
          <FaBrush className={styles.icon} />
          <h4>Retouche générale</h4>
          <p>Nos retoucheurs professionnels sont experts pour améliorer vos images de manière subtile et naturelle.</p>
        </div>
      </div>
    </div>
  );
}

export default Photoshop;

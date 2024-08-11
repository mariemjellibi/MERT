import React, { useEffect } from 'react';
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Createwebsites from "./components/Createwebsites/Createwebsites";
import Montage from "./components/Montage/Montage";
import Photoshop from "./components/Photoshop/Photoshop";
import Contact from "./components/Contact/Contact";
import Marketing from './components/Marketing/Marketing';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const movingShape = document.querySelector(`.${styles.movingShape}`);
      if (movingShape) {
        movingShape.style.transform = `translate(-50%, -50%) translateY(${scrollTop * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.App}>
        <Header />
        <Hero />
        <Intro />
        <Services />
        <Createwebsites />
        <Montage />
        <Photoshop />
        <Marketing/>
        <Contact />
        <div className={styles.movingShape}></div> {/* The moving shape */}
      </div>
    </>
  );
}

export default App;

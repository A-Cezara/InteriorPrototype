import React from 'react';
import styles from './Landing.module.css';

export default function HeroSection() {
  return (
    <div className={styles.mainHero}>
      <div className={styles.leftHero}>
        <h3>Welcome to HOMCO</h3>
        <h1>Build your elegant dream home interior</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button>Our Projects</button>
      </div>
      <div className={styles.rightHero}>
        <div className={styles.polygon}></div>
      </div>
    </div>
  );
}

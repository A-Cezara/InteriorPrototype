import React from 'react';
import styles from './Landing.module.css';
import { FaArrowRight } from 'react-icons/fa';

export default function FloatingMenu() {
  return (
    <div>
      <ul className={styles.floatMenu}>
        <li className={styles.floatBlack}>
          <h2>HOME DESIGN CONSULTATION</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <FaArrowRight
            style={{
              color: 'white',
              fontSize: '24px',
              margin: '0 10px',
              cursor: 'pointer',
            }}
          />
        </li>
        <li className={styles.floatGrey}>
          <h2>HOME DESIGN 3D 2D INTERIOR SERVICE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <FaArrowRight
            style={{
              color: 'white',
              fontSize: '24px',
              margin: '0 10px',
              cursor: 'pointer',
            }}
          />
        </li>
        <li className={styles.floatBlack}>
          <h2>HOME DESIGN CONSULTATION</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <FaArrowRight
            style={{
              color: 'white',
              fontSize: '24px',
              margin: '0 10px',
              cursor: 'pointer',
            }}
          />
        </li>
      </ul>
    </div>
  );
}

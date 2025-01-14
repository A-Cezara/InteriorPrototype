import React from 'react';
import styles from './Landing.module.css';
import { FaChevronDown, FaBars } from 'react-icons/fa';

export default function Navigation() {
  return (
    <div className={styles.header}>
      <div>
        <img src={`${process.env.PUBLIC_URL}/homco.png`} alt="Logo" />
      </div>
      <ul className={styles.navigation}>
        <li>Home</li>
        <li>About Us</li>
        <li>Our services</li>
        <li>
          Our Projects <FaChevronDown style={{ marginLeft: '8px' }} />
        </li>
        <li>Portofolio</li>
        <li>
          Pages <FaChevronDown style={{ marginLeft: '8px' }} />
        </li>
        <li>
          <FaBars
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

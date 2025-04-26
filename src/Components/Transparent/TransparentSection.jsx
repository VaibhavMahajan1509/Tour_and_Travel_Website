import React from 'react';
import styles from './TransparentSection.module.css';

const TransparentSection = () => {
  return (
    <div className={styles.transparentSection}>
      <div className={styles.overlay}>
        <div className={styles.callToAction}>
          <h1>Welcome to My Site</h1>
          <p>This section scrolls over a beautiful background.</p>
        </div>
        <div className={styles.contactUs}>
          <button className={styles.btn}>Contact Us!</button>
        </div>
      </div>
    </div>
  );
};

export default TransparentSection;

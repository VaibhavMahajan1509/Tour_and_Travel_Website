import React from 'react';
import styles from './TransparentSection.module.css';

const TransparentSection = () => {
  return (
    <div className={styles.transparentSection}>
      <div className={styles.overlay}>
        <div className={styles.callToAction}>
          <p>CALL TO ACTION</p>
          <h1>READY FOR UNFORGATABLE TRAVEL. REMEMBER US!</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className={styles.contactUs}>
          <button className={styles.btn}>Contact Us!</button>
        </div>
      </div>
    </div>
  );
};

export default TransparentSection;

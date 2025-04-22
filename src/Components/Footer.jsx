import React from 'react';
import styles from "./Footer.module.css";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <p className={styles.footerHeading}>Company</p>
          <ul className={styles.footerList}>
            <li>About Us</li>
            <li>News</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <p className={styles.footerHeading}>Explore</p>
          <ul className={styles.footerList}>
            <li>FAQ</li>
            <li>Tour Listings</li>
            <li>Destination</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <p className={styles.footerHeading}>Quick Links</p>
          <ul className={styles.footerList}>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <p className={styles.footerHeading}>Contact Info</p>
          <p>Dehradun, Uttarakhand, India</p>
          <ul className={styles.footerList}>
            <li><IoLocationOutline />rawatcoder@gmail.com</li>
            <li><BsTelephone />6267090692</li>
          </ul>
        </div>
      </div>
      <hr className={styles.Footerline}/>
      <p className={styles.footerCopyright}>
        © 2025 rawatcoder. All rights reserved.
      </p>
    </>
  );
};

export default Footer;

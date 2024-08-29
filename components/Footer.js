import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <h3>BE THE FIRST TO KNOW</h3>
        <p>Sign up for updates from our store.</p>
        <input type="email" placeholder="Enter your e-mail..." />
        <button>SUBSCRIBE</button>
      </div>
      <div className={styles.footerContent}>
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h4>Contact Us</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@yourstore.com</p>
          <h4>Currency</h4>
          <p>USD</p>
        </div>
        <div className={styles.followUs}>
          <h4>Follow Us</h4>
          <ul>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024 yourstore. All rights reserved.</p>
        <ul className={styles.paymentMethods}>
          <li>Visa</li>
          <li>Mastercard</li>
          <li>PayPal</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

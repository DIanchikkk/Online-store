import React from 'react';
import styles from './Footer.module.css';
import { FaVk, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>

        <div className={styles.footer__section}>
          <h2 className={styles.footer__logo}> BAG<br />STORE</h2>
          <p className={styles.footer__description}>
            Элегантные сумки <br /> для каждого<br /> дня
          </p>
        </div>

        <div className={styles.footer__section}>
          <h3 className={styles.footer__title}>Информация</h3>
          <ul className={styles.footer__list}>
            <li><a href="#" className={styles.footer__link}>Доставка</a></li>
            <li><a href="#" className={styles.footer__link}>Оплата</a></li>
            <li><a href="#" className={styles.footer__link}>Контакты</a></li>
          </ul>
        </div>

        <div className={styles.footer__section}>
          <h3 className={styles.footer__title}>Связь</h3>
          <p className={styles.footer__contact}>+7 (999) 123-45-67</p>
          <div className={styles.footer__socials}>
            <a href="#" aria-label="VK" className={styles.footer__icon}>
              <FaVk />
            </a>
            <a href="#" aria-label="Instagram" className={styles.footer__icon}>
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>
      <div className={styles.footer__bottom}>
        <p>© 2025 MyBag. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;

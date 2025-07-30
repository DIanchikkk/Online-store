import React, { useState } from 'react';
import styles from './Header.module.css';
import LoginModal from './LoginModal';
import logo from '../../assets/img/logo.png';
import { FiPhone, FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('login'); 

  const openLoginModal = () => {
    setModalMode('login'); 
    setIsModalOpen(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <img src={logo} alt="Logo" className={styles.header__logo} />

        <nav className={styles.header__nav}>
          <a href="#" className={styles.header__navItem}>Каталог</a>
          <a href="#" className={styles.header__navItem}>О проекте</a>
          <a href="#" className={styles.header__navItem}>Сумки</a>
          <a href="#" className={styles.header__navItem}>Скидки</a>
        </nav>
      </div>

      <div className={styles.header__right}>
        <div className={styles.header__topRow}>
          <div className={styles.header__contact}>
          <FiPhone className={`${styles.header__phoneIcon} ${styles['header__phoneIcon--ringing']}`} />
            <span>+7 (999) 123-45-67</span>
          </div>

          <div className={styles.header__actions}>
            <FiShoppingCart className={styles.header__icon} aria-label="Корзина" />
            <FiUser
              className={styles.header__icon}
              onClick={openLoginModal}
              aria-label="Войти"
            />
          </div>
        </div>

        <div className={styles.header__search}>
          <input
            type="text"
            className={styles.header__input}
            placeholder="Поиск..."
          />
          <FiSearch className={styles.header__searchIcon} />
        </div>
      </div>

      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={modalMode}
        onChangeMode={setModalMode}
      />
    </header>
  );
}

export default Header;

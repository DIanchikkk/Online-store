import React, { useState } from 'react';
import styles from './Header.module.css';
import LoginModal from './LoginModal';
import { FiPhone, FiUser, FiSearch, FiShoppingCart } from 'react-icons/fi';
import { FaShoppingBag } from 'react-icons/fa'; 

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
        <nav className={styles.header__nav}>
          <a href="#" className={styles.header__navItem}>Главная</a>
          <a href="#" className={styles.header__navItem}>Скидки</a>
          <a href="#" className={styles.header__navItem}>Каталог</a>
          <a href="#" className={styles.header__navItem}>Корзина</a>
        </nav>
      </div>

      <div className={styles.header__center}>
        <span className={styles.logoText}>
             BAG<br />STORE
        </span>
        <FaShoppingBag className={styles.logoIcon} />
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

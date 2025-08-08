import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { LoginModal } from "../LoginModal/LoginModal";
import { FiPhone, FiUser, FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { FaShoppingBag } from 'react-icons/fa';

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('login');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const openLoginModal = () => {
    setModalMode('login');
    setIsModalOpen(true);
  };

  const goToCartPage = () => {
    navigate('/cart');
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__mobileMenuToggle} onClick={toggleMenu}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>

      <div className={styles.header__left}>
        <nav className={`${styles.header__nav} ${menuOpen ? styles.open : ''}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${styles.header__navItem} ${isActive ? styles.active : ''}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Главная
          </NavLink>
          <NavLink
            to="/discounts"
            className={({ isActive }) =>
              `${styles.header__navItem} ${isActive ? styles.active : ''}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Скидки
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              `${styles.header__navItem} ${isActive ? styles.active : ''}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Каталог
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `${styles.header__navItem} ${isActive ? styles.active : ''}`
            }
            onClick={goToCartPage}
          >
            Корзина
          </NavLink>
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
            <FiShoppingCart
              className={styles.header__icon}
              aria-label="Корзина"
              onClick={goToCartPage}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') goToCartPage();
              }}
            />
            <FiUser
              className={styles.header__icon}
              onClick={openLoginModal}
              aria-label="Войти"
            />
          </div>
        </div>

        <div className={styles.header__search}>
          <input type="text" className={styles.header__input} placeholder="Поиск..." />
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

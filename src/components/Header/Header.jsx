import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import LoginModal from './LoginModal';
import { FiPhone, FiUser, FiSearch, FiShoppingCart } from 'react-icons/fi';
import { FaShoppingBag } from 'react-icons/fa';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('login');
  const navigate = useNavigate();

  const openLoginModal = () => {
    setModalMode('login');
    setIsModalOpen(true);
  };

  const goToCartPage = () => {
    navigate('/cart');
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <nav className={styles.header__nav}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${styles.header__navItem} ${isActive ? styles.active : ''}`
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/discounts"
            className={({ isActive }) =>
              `${styles.header__navItem} ${isActive ? styles.active : ''}`
            }
          >
            Скидки
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              `${styles.header__navItem} ${isActive ? styles.active : ''}`
            }
          >
            Каталог
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `${styles.header__navItem} ${isActive ? styles.active : ''}`
            }
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
            <FiPhone
              className={`${styles.header__phoneIcon} ${styles['header__phoneIcon--ringing']}`}
            />
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

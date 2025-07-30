import React, { useState } from 'react';
import styles from './LoginModal.module.css';

const LoginModal = ({ isOpen, onClose, mode = 'login', onChangeMode }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const isLogin = mode === 'login';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!formData.email) {
      newErrors.email = 'Email обязателен';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Неверный формат email';
    }
  
    if (!formData.password) {
      newErrors.password = 'Пароль обязателен';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен быть не менее 6 символов';
    }
  
    if (!isLogin) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Подтверждение пароля обязательно';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Пароли не совпадают';
      }
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Форма валидна:', formData);
      onClose(); 
    }
  };

  const getInputClass = (field) =>
    `${styles.loginModal__input} ${errors[field] ? styles.loginModal__inputError : ''}`;

  return (
    <div className={styles.loginModal}>
      <div className={styles.loginModal__backdrop} onClick={onClose}></div>

      <div className={styles.loginModal__content}>
        <button className={styles.loginModal__close} onClick={onClose}>×</button>

        {isLogin ? (
          <>
            <h2 className={styles.loginModal__title}>Вход в аккаунт</h2>
            <form className={styles.loginModal__form} onSubmit={handleSubmit} noValidate>
              <label className={styles.loginModal__label}>
                Email
                <input
                  type="email"
                  name="email"
                  className={getInputClass('email')}
                  placeholder="example@mail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className={styles.loginModal__error}>{errors.email}</span>}
              </label>

              <label className={styles.loginModal__label}>
                Пароль
                <input
                  type="password"
                  name="password"
                  className={getInputClass('password')}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <span className={styles.loginModal__error}>{errors.password}</span>}
              </label>

              <button type="submit" className={styles.loginModal__button}>Войти</button>
            </form>
            <p className={styles.loginModal__footer}>
              Нет аккаунта?{' '}
              <button
                type="button"
                className={styles.loginModal__toggle}
                onClick={() => onChangeMode('register')}
              >
                Зарегистрироваться
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 className={styles.loginModal__title}>Регистрация</h2>
            <form className={styles.loginModal__form} onSubmit={handleSubmit}>
              <label className={styles.loginModal__label}>
                Email
                <input
                  type="email"
                  name="email"
                  className={getInputClass('email')}
                  placeholder="example@mail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className={styles.loginModal__error}>{errors.email}</span>}
              </label>

              <label className={styles.loginModal__label}>
                Пароль
                <input
                  type="password"
                  name="password"
                  className={getInputClass('password')}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <span className={styles.loginModal__error}>{errors.password}</span>}
              </label>

              <label className={styles.loginModal__label}>
                Подтвердите пароль
                <input
                  type="password"
                  name="confirmPassword"
                  className={getInputClass('confirmPassword')}
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <span className={styles.loginModal__error}>{errors.confirmPassword}</span>
                )}
              </label>

              <button type="submit" className={styles.loginModal__button}>Зарегистрироваться</button>
            </form>
            <p className={styles.loginModal__footer}>
              Уже есть аккаунт?{' '}
              <button
                type="button"
                className={styles.loginModal__toggle}
                onClick={() => onChangeMode('login')}
              >
                Войти
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;

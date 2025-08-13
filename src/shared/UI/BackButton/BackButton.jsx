import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css';

export function BackButton({ style }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button
      className={styles.backButton}
      onClick={goBack}
      aria-label="Назад"
      style={style}
    >
      ← Назад
    </button>
  );
}

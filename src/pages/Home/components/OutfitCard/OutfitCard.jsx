import React, { useState } from 'react';
import styles from './OutfitCard.module.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export function OutfitCard({ look }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.card}
        style={{ backgroundImage: `url(${look.image})` }}
      >
        <div className={styles.overlay}>
          <p className={styles.description}>{look.description}</p>
          <button
            className={`${styles.likeButton} ${liked ? styles.liked : ''}`}
            onClick={() => setLiked(!liked)}
            aria-label={liked ? 'Убрать из избранного' : 'Добавить в избранное'}
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      </div>
    </div>
  );
}

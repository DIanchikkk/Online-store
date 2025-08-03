import React, { useState } from 'react';
import styles from './BagsCard.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';

function BagsCard({ bag, badge = 'NEW', customImageClass }) {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!bag.id) {
      console.error('Ошибка: у товара отсутствует id');
      return;
    }

    dispatch(addToCart({ ...bag }));
  };

  return (
    <div className={styles['bags-card']}>
      {badge && <span className={styles['badge']}>{badge}</span>}

      <div
        className={`${styles['bags-card__like']} ${liked ? styles.active : ''}`}
        onClick={() => setLiked(!liked)}
        aria-label={liked ? 'Удалить из избранного' : 'Добавить в избранное'}
        role="button"
        tabIndex={0}
        onKeyPress={e => {
          if (e.key === 'Enter') setLiked(!liked);
        }}
      >
        <svg
          className={styles['like-icon']}
          viewBox="0 0 24 24"
          fill={liked ? '#e60023' : 'none'}
          stroke={liked ? '#e60023' : '#aaa'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.72-7.72 1.06-1.06a5.5 5.5 0 0 0 0-7.84z" />
        </svg>
      </div>

      <div className={styles['bags-card__imageContainer']}>
        <img
          src={bag.image || '/images/fallback.jpg'}
          alt={bag.name || 'Товар'}
          className={`${styles['bags-card__image']} ${
            customImageClass ? styles[customImageClass] : ''
          }`}
          draggable={false}
        />
      </div>

      <div className={styles['bags-card__content']}>
        <h3 className={styles['bags-card__name']}>{bag.name}</h3>
        <p className={styles['bags-card__type']}>{bag.type}</p>
        <p className={styles['bags-card__description']}>{bag.description}</p>
      </div>

      <div className={styles['bags-card__footer']}>
        <p className={styles['bags-card__price']}>
          {bag.price ? `${bag.price} ₽` : 'Цена не указана'}
        </p>
        <button
          className={styles['bags-card__button']}
          aria-label={`Добавить ${bag.name} в корзину`}
          onClick={handleAddToCart}
        >
          <FaShoppingCart className={styles['cart-icon']} />
          В корзину
        </button>
      </div>
    </div>
  );
}

export default BagsCard;

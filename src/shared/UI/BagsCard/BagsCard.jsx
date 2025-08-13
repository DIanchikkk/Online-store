import React, { useState } from 'react';
import styles from './BagsCard.module.css';
import { FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../features/cart/cartSlice';

export function BagsCard({ bag, badge = 'NEW', customImageClass, onAdd }) {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!bag.id) {
      console.error('Ошибка: у товара отсутствует id');
      return;
    }
    dispatch(addToCart({ ...bag }));

    if (onAdd) {
      onAdd(bag.name);
    }
  };

  const handleMoreDetails = () => {
    console.log('Переход на страницу товара:', bag.id);
  };

  let formattedPrice = '';
  if (bag.price !== undefined && bag.price !== null) {
    const priceStr = String(bag.price).trim();
    formattedPrice = priceStr.includes('₽') ? priceStr : `${priceStr} ₽`;
  }

  return (
    <div className={styles['bags-card']}>
      {badge && <span className={styles['badge']}>{badge}</span>}

      <div
        className={`${styles['bags-card__like']} ${liked ? styles.active : ''}`}
        onClick={() => setLiked(!liked)}
        aria-label={liked ? 'Удалить из избранного' : 'Добавить в избранное'}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setLiked(!liked);
        }}
      >
        {liked ? (
          <FaHeart className={styles['like-icon']} />
        ) : (
          <FaRegHeart className={styles['like-icon']} />
        )}
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
        {formattedPrice && (
          <p className={styles['bags-card__price']}>{formattedPrice}</p>
        )}
        <button
          className={`${styles['bags-card__button']} ${styles['bags-card__more']}`}
          onClick={handleMoreDetails}
        >
          Подробнее
        </button>
        <button
          className={`${styles['bags-card__button']} ${styles['bags-card__iconButton']}`}
          onClick={handleAddToCart}
        >
          <FaShoppingCart className={styles['cart-icon']} />
        </button>
      </div>
    </div>
  );
}

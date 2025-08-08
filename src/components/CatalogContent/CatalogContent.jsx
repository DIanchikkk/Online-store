import React, { useState } from 'react';
import styles from './CatalogContent.module.css';
import { FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';

export function CatalogContent({ collection }) {
  const bagsToShow = collection.bags.slice(0, 9);

  return (
    <section className={styles.catalog}>
      <h2 className={styles['catalog__title']}>{collection.title}</h2>
      <p className={styles['catalog__description']}>{collection.description}</p>

      <div className={styles['catalog__grid']}>
        {bagsToShow.map((bag) => (
          <BagsCard key={bag.id} bag={bag} />
        ))}
      </div>
    </section>
  );
}

export function BagsCard({ bag }) {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!bag.id) {
      console.error('Ошибка: у товара нет id');
      return;
    }
    dispatch(addToCart({ ...bag }));
  };

  return (
    <article className={styles['catalog__card']}>
      <button
        className={`${styles['catalog__like']} ${
          liked ? styles['catalog__like--active'] : ''
        }`}
        onClick={() => setLiked(!liked)}
        aria-label={liked ? 'Удалить из избранного' : 'Добавить в избранное'}
      >
        {liked ? (
          <FaHeart className={styles['catalog__like-icon']} />
        ) : (
          <FaRegHeart className={styles['catalog__like-icon']} />
        )}
      </button>

      <div className={styles['catalog__image-wrapper']}>
        <img
          src={bag.image}
          alt={bag.name}
          className={styles['catalog__image']}
          draggable={false}
        />
      </div>

      <h3 className={styles['catalog__name']}>{bag.name}</h3>
      {bag.description && (
        <p className={styles['catalog__description-text']}>
          {bag.description}
        </p>
      )}

      <div className={styles['catalog__footer']}>
        <p className={styles['catalog__price']}>
          {bag.price ? `${bag.price} ₽` : 'Цена не указана'}
        </p>
        <button
          className={styles['catalog__button']}
          aria-label={`Добавить ${bag.name} в корзину`}
          onClick={handleAddToCart}
        >
          <FaShoppingCart className={styles['catalog__cart-icon']} />
          В корзину
        </button>
      </div>
    </article>
  );
}

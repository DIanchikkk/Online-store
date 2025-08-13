import React, { useState } from 'react';
import styles from './CatalogContent.module.css';
import { FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../features/cart/cartSlice';

export function CatalogContent({ collection, onItemAdd }) {
  if (!collection || !collection.bags) {
    return <p className={styles.catalog__empty}>Нет товаров</p>;
  }

  const bagsToShow = collection.bags.slice(0, 9);

  return (
    <section className={styles.catalog}>
      <h2 className={styles.catalog__title}>{collection.title}</h2>
      <p className={styles.catalog__description}>{collection.description}</p>

      <div className={styles.catalog__grid}>
        {bagsToShow.map((bag) => (
          <CatalogCard
            key={bag.id}
            bag={bag}
            onAdd={() => onItemAdd && onItemAdd(bag.name)}
          />
        ))}
      </div>
    </section>
  );
}

function CatalogCard({ bag, onAdd }) {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!bag.id) {
      console.error('Ошибка: у товара нет id');
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
    <article className={styles['catalog-card']}>
      <div
        className={`${styles['catalog-card__like']} ${liked ? styles.active : ''}`}
        onClick={() => setLiked(!liked)}
        aria-label={liked ? 'Удалить из избранного' : 'Добавить в избранное'}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') setLiked(!liked); }}
      >
        {liked ? (
          <FaHeart className={styles['like-icon']} />
        ) : (
          <FaRegHeart className={styles['like-icon']} />
        )}
      </div>

      <div className={styles['catalog-card__imageContainer']}>
        <img
          src={bag.image || '/images/fallback.jpg'}
          alt={bag.name || 'Товар'}
          className={styles['catalog-card__image']}
          draggable={false}
        />
      </div>

      <div className={styles['catalog-card__content']}>
        <h3 className={styles['catalog-card__name']}>{bag.name}</h3>
        {bag.type && <p className={styles['catalog-card__type']}>{bag.type}</p>}
        {bag.description && (
          <p className={styles['catalog-card__description']}>{bag.description}</p>
        )}
      </div>

      <div className={styles['catalog-card__footer']}>
        {formattedPrice && (
          <p className={styles['catalog-card__price']}>{formattedPrice}</p>
        )}
        <button
          className={`${styles['catalog-card__button']} ${styles['catalog-card__more']}`}
          onClick={handleMoreDetails}
        >
          Подробнее
        </button>
        <button
          className={`${styles['catalog-card__button']} ${styles['catalog-card__iconButton']}`}
          onClick={handleAddToCart}
          aria-label={`Добавить ${bag.name} в корзину`}
          title="Добавить в корзину"
        >
          <FaShoppingCart className={styles['cart-icon']} />
        </button>
      </div>
    </article>
  );
}

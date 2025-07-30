import React from 'react';
import styles from './BagsCard.module.css';

function BagsCard({ bag }) {
  return (
    <div className={styles['bags-card']}>
      <img
        src={bag.image}
        alt={bag.name}
        className={styles['bags-card__image']}
      />
      <h3 className={styles['bags-card__name']}>{bag.name}</h3>
      <p className={styles['bags-card__price']}>{bag.price}</p>
      <button className={styles['bags-card__button']}>В корзину</button>
    </div>
  );
}

export default BagsCard;

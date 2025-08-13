import React, { useState } from 'react';
import styles from './Discounts.module.css';
import { BagsCard } from '../../shared/UI/BagsCard/BagsCard';
import ArrowLeft from '../../assets/img/ArrowLeft.svg?react';
import ArrowRight from '../../assets/img/ArrowRight.svg?react';
import { discountedProducts } from '../../mocks/discountedProducts';
import { BackButton } from '../../shared/UI/BackButton/BackButton';
import { toast } from 'react-toastify';

export function Discounts() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 3;

  const prev = () => setStartIndex(i => Math.max(i - 1, 0));
  const next = () =>
    setStartIndex(i => Math.min(i + 1, discountedProducts.length - cardsToShow));

  const visibleCards = discountedProducts.slice(
    startIndex,
    startIndex + cardsToShow
  );

  const showAddedToast = (itemName) => {
    toast.success(`🛒 ${itemName} добавлен в корзину!`, {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      className: 'custom-toast',
    });
  };

  return (
    <div className={styles.discounts}>
      <BackButton style={{ top: '60px', right: 'auto', left: '50px' }} />

      <div className={styles.discounts__titleContainer}>
        <h2 className={styles.discounts__title}>discounts</h2>
        <div className={styles.discounts__heroBackground}>скидки</div>
      </div>

      <section className={styles.discounts__carouselContainer}>
        <button
          className={styles.discounts__arrow}
          onClick={prev}
          disabled={startIndex === 0}
        >
          <ArrowLeft />
        </button>

        <div className={styles.discounts__carousel}>
          {visibleCards.map((bag) => (
            <BagsCard
              key={bag.id}
              bag={bag}
              badge="СКИДКА"
              customImageClass="discountImage"
              onAdd={showAddedToast}
            />
          ))}
        </div>

        <button
          className={styles.discounts__arrow}
          onClick={next}
          disabled={startIndex >= discountedProducts.length - cardsToShow}
        >
          <ArrowRight />
        </button>
      </section>
    </div>
  );
}

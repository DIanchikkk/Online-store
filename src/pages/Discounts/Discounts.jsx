import React, { useState } from 'react';
import styles from './Discounts.module.css';
import BagsCard from '../../components/BagsCard/BagsCard';

import seventhBag from '../../assets/img/sixth-bag.jpg';
import eighthBag from '../../assets/img/fifth-bag.jpg';
import ninthBag from '../../assets/img/fourth-bag.jpg';
import tenthBag from '../../assets/img/third-bag.jpg';
import eleventhBag from '../../assets/img/second-bag.jpg';
import twelfthBag from '../../assets/img/first-bag.jpg';

const discountedProducts = [
  {
    id: 101,
    name: 'Guess',
    price: '2 990₽',
    image: seventhBag,
    description: 'Стильная сумка Guess — качество и элегантность со скидкой!',
  },
  {
    id: 102,
    name: 'Urban Classic',
    price: '3 500₽',
    image: eighthBag,
    description: 'Универсальный вариант для города — только сегодня со скидкой!',
  },
  {
    id: 103,
    name: 'Velvet Grace',
    price: '3 500₽',
    image: ninthBag,
    description: 'Практичная и модная — добавь в гардероб по выгодной цене.',
  },
  {
    id: 104,
    name: 'Midnight Charm',
    price: '3 500₽',
    image: tenthBag,
    description: 'Современный дизайн, удобство и скидка — всё в одном.',
  },
  {
    id: 105,
    name: 'Casual Luxe',
    price: '3 500₽',
    image: eleventhBag,
    description: 'Акцентный аксессуар, который подчеркнёт твой стиль.',
  },
  {
    id: 106,
    name: 'Soft Touch',
    price: '3 500₽',
    image: twelfthBag,
    description: 'Минимализм, комфорт и скидка — отличное сочетание.',
  },
];

function Discounts() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 3;

  const prev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const next = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, discountedProducts.length - cardsToShow)
    );
  };

  const visibleCards = discountedProducts.slice(
    startIndex,
    startIndex + cardsToShow
  );

  return (
    <div className={styles.discounts}>
      <div className={styles.discounts__titleContainer}>
         <h2 className={styles.discounts__title}>discounts</h2>
         <div className={styles.discounts__heroBackground}>скидки</div>
    </div>


      <section className={styles.discounts__carouselContainer}>
        <button
          className={styles.discounts__arrow}
          onClick={prev}
          disabled={startIndex === 0}
          aria-label="Предыдущие карточки"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 19L8 12L15 5"
              stroke="#333"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={styles.discounts__carousel}>
          {visibleCards.map((bag) => (
            <BagsCard
              key={bag.id}
              bag={bag}
              badge="СКИДКА"
              customImageClass="discountImage"
            />
          ))}
        </div>

        <button
          className={styles.discounts__arrow}
          onClick={next}
          disabled={startIndex >= discountedProducts.length - cardsToShow}
          aria-label="Следующие карточки"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 5L16 12L9 19"
              stroke="#333"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </section>
    </div>
  );
}

export default Discounts;

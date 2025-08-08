import React, { useState } from 'react';
import styles from './Home.module.css';
import { BagsCard } from '../../components/BagsCard/BagsCard';
import { CollectionsSection } from '../../components/CollectionsSection/CollectionsSection';
import { LookSection } from '../../components/LookSection/LookSection';
import { mockProducts } from '../../mocks/mockProducts';
import ArrowLeft from '../../assets/img/ArrowLeft.svg?react';
import ArrowRight from '../../assets/img/ArrowRight.svg?react';

export function Home() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 3;

  const prev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const next = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, mockProducts.length - cardsToShow)
    );
  };

  const visibleCards = mockProducts.slice(startIndex, startIndex + cardsToShow);

  return (
    <div className={styles.home}>
      <section className={styles.home__hero}>
        <h2 className={styles.home__title}>New</h2>
        <h1 className={styles.home__heroBackground}>НОВИНКИ</h1>
      </section>

      <section className={styles.home__carouselContainer}>
        <button
          className={styles.home__arrow}
          onClick={prev}
          disabled={startIndex === 0}
          aria-label="Предыдущие карточки"
        >
          <ArrowLeft />
        </button>

        <div className={styles.home__carousel}>
          {visibleCards.map((bag) => (
            <BagsCard key={bag.id} bag={bag} />
          ))}
        </div>

        <button
          className={styles.home__arrow}
          onClick={next}
          disabled={startIndex >= mockProducts.length - cardsToShow}
          aria-label="Следующие карточки"
        >
          <ArrowRight />
        </button>
      </section>

      <CollectionsSection />
      <LookSection />
    </div>
  );
}

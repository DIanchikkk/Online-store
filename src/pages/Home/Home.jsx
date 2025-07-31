import React, { useState } from 'react';
import styles from './Home.module.css';
import BagsCard from '../../components/BagsCard/BagsCard.jsx';
import CollectionsSection from '../../components/CollectionsSection/CollectionsSection';
import LookSection from '../../components/LookSection/LookSection';

import FirstBag from '../../assets/img/first-bag.jpg';
import SecondBag from '../../assets/img/second-bag.jpg';
import ThirdBag from '../../assets/img/third-bag.jpg';
import FourthBag from '../../assets/img/fourth-bag.jpg';
import FifthBag from '../../assets/img/fifth-bag.jpg';
import SixthBag from '../../assets/img/sixth-bag.jpg';

const mockProducts = [
  {
    id: 1,
    name: 'Сумка кожаная',
    price: '4 990₽',
    image: FirstBag,
    description: 'Классическая сумка из натуральной кожи с надежной фурнитурой.'
  },
  {
    id: 2,
    name: 'Сумка на плечо',
    price: '3 790₽',
    image: SecondBag,
    description: 'Удобная и стильная сумка на плечо из эко-кожи.'
  },
  {
    id: 3,
    name: 'Мини сумка',
    price: '2 450₽',
    image: ThirdBag,
    description: 'Компактная сумка для самых необходимых вещей.'
  },
  {
    id: 4,
    name: 'Большая сумка',
    price: '5 100₽',
    image: FourthBag,
    description: 'Просторная сумка для повседневного использования.'
  },
  {
    id: 5,
    name: 'Клатч',
    price: '3 200₽',
    image: FifthBag,
    description: 'Элегантный клатч из бархатистой ткани с металлическими деталями.'
  },
  {
    id: 6,
    name: 'Рюкзак',
    price: '4 800₽',
    image: SixthBag,
    description: 'Практичный рюкзак из прочных материалов для путешествий.'
  },
];

function Home() {
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
      <CollectionsSection />
      <LookSection />
    </div>
  );
}

export default Home;

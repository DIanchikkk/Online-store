import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CollectionsSection.module.css';

import collection from '../../assets/img/collection.jpg';
import firstCollection from '../../assets/img/first-collection.webp';
import secondCollection from '../../assets/img/second-collection.webp';
import thirdCollection from '../../assets/img/third-collection.webp';
import fourthCollection from '../../assets/img/fourth-collection.webp';

function CollectionsSection() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/catalog?collection=${id}`);
  };

  return (
    <section className={styles.collections}>
      <div className={styles.collections__left}>
        <div className={styles.collections__imagePlaceholder}>
          <img 
            src={collection} 
            alt="Коллекция" 
            className={styles.collections__image} 
          />
        </div>
      </div>

      <div className={styles.collections__right}>
        <div className={styles.collections__titleEnglish}>collection</div>
        <div className={styles.collections__titleRussian}>коллекции</div>

        <div className={styles.collections__items}>
          <div className={`${styles.collectionItem} ${styles.up}`} onClick={() => handleClick('eco')}>
            <img src={firstCollection} alt="Эко" className={styles.collectionImage} />
            <div className={styles.collectionItem__label}>Новая коллекция с Эко-кожей</div>
          </div>
          <div className={`${styles.collectionItem} ${styles.down}`} onClick={() => handleClick('prints')}>
            <img src={secondCollection} alt="Принты" className={styles.collectionImage} />
            <div className={styles.collectionItem__label}>Сумки с принтами</div>
          </div>
          <div className={`${styles.collectionItem} ${styles.up}`} onClick={() => handleClick('canes-umbrellas')}>
            <img src={thirdCollection} alt="Зонты" className={styles.collectionImage} />
            <div className={styles.collectionItem__label}>Зонты, трости</div>
          </div>
          <div className={`${styles.collectionItem} ${styles.down}`} onClick={() => handleClick('classic')}>
            <img src={fourthCollection} alt="Классика" className={styles.collectionImage} />
            <div className={styles.collectionItem__label}>Классические сумки</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollectionsSection;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CollectionsSection.module.css';

import { collectionsData, mainImage } from '../../../../mocks/collectionsData';

export function CollectionsSection() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/catalog?collection=${id}`);
  };

  return (
    <section className={styles.collections}>
      <div className={styles.collections__left}>
        <div className={styles.collections__imagePlaceholder}>
          <img 
            src={mainImage} 
            alt="Коллекция" 
            className={styles.collections__image} 
          />
        </div>
      </div>

      <div className={styles.collections__right}>
        <div className={styles.collections__titleEnglish}>collection</div>
        <div className={styles.collections__titleRussian}>коллекции</div>

        <div className={styles.collections__items}>
          {collectionsData.map(({ id, image, alt, label, positionClass }) => (
            <div
              key={id}
              className={`${styles.collectionItem} ${styles[positionClass]}`}
              onClick={() => handleClick(id)}
            >
              <img src={image} alt={alt} className={styles.collectionImage} />
              <div className={styles.collectionItem__label}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

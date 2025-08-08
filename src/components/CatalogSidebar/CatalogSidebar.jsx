import React from 'react';
import styles from './CatalogSidebar.module.css';

export function CatalogSidebar({ collections, activeId, onSelect }) {
  return (
    <div className={styles.sidebar}>
      {collections.map((item) => (
        <button
          key={item.id}
          className={`${styles.sidebar__item} ${item.id === activeId ? styles.active : ''}`}
          onClick={() => onSelect(item.id)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}

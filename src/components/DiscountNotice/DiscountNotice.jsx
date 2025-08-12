import React from 'react';
import styles from './DiscountNotice.module.css';
import './DiscountNotice.media.css'

export function DiscountNotice() {
  return (
    <div className={styles.discountBanner}>
      <p className={styles.discountText}>
        СКИДКИ ДО 50% НА СУМКИ! — УСПЕЙ КУПИТЬ! &nbsp;&nbsp;&nbsp;
        СКИДКИ ДО 50% НА СУМКИ! — УСПЕЙ КУПИТЬ! &nbsp;&nbsp;&nbsp;
        СКИДКИ ДО 50% НА СУМКИ! — УСПЕЙ КУПИТЬ!
      </p>
    </div>
  );
}

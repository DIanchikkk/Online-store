import React, { useEffect } from 'react';
import styles from './Cart.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from '../../features/cart/cartSlice';
import { BackButton } from '../../shared/UI/BackButton/BackButton';
import emptyCartVideo from '../../assets/video/сart.mp4';

export function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  // Прокрутка вверх при открытии страницы корзины
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const totalPrice = items.reduce(
    (total, item) =>
      total +
      parseFloat(item.price.replace(/\s*₽/, '').replace(/\s/g, '')) * item.quantity,
    0
  );

  const handleOrder = () => {
    if (items.length === 0) {
      alert('Корзина пуста');
      return;
    }
    alert('Ваш заказ принят! Спасибо!');
    dispatch(clearCart());
  };

  const handleClearCart = () => {
    if (window.confirm('Очистить корзину?')) {
      dispatch(clearCart());
    }
  };

  return (
    <div className={styles['cart-page']}>
      <BackButton style={{ top: '-20px', left: '50px' }} />
      
      <div className={styles['cart-card']}>
        <h1 className={styles['cart-card__title']}>Ваша корзина</h1>

        {items.length === 0 ? (
          <div className={styles['cart-empty']}>
            <video
              src={emptyCartVideo}
              autoPlay
              loop
              muted
              className={styles['cart-empty__video']}
            />
            <p className={styles['cart-card__empty']}>Корзина пока пуста :(</p>
          </div>
        ) : (
          <>
            <ul className={styles['cart-card__list']}>
              {items.map(item => (
                <li key={item.id} className={styles['cart-card__item']}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles['cart-card__image']}
                  />

                  <div className={styles['cart-card__info']}>
                    <span className={styles['cart-card__name']}>{item.name}</span>

                    <div className={styles['cart-card__controls']}>
                      <button
                        className={styles['cart-card__btn']}
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        aria-label={`Уменьшить количество ${item.name}`}
                      >
                        −
                      </button>

                      <span className={styles['cart-card__quantity']}>{item.quantity}</span>

                      <button
                        className={styles['cart-card__btn']}
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        aria-label={`Увеличить количество ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className={styles['cart-card__actions']}>
                    <span className={styles['cart-card__price']}>{item.price}</span>

                    <div className={styles['cart-card__buttons-row']}>
                      <button
                        className={styles['cart-card__remove']}
                        onClick={() => dispatch(removeFromCart(item.id))}
                        aria-label={`Удалить ${item.name} из корзины`}
                      >
                        Удалить
                      </button>

                      <button
                        className={styles['cart-card__favorite']}
                        aria-label={`Добавить ${item.name} в избранное`}
                        onClick={() => alert(`Добавлено в избранное: ${item.name}`)}
                      >
                        В избранное
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles['cart-card__footer']}>
              <div className={styles['cart-card__total']}>
                Итого:{' '}
                <span className={styles['cart-card__total-price']}>
                  {totalPrice.toLocaleString('ru-RU')} ₽
                </span>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  className={styles['cart-card__order-button']}
                  aria-label="Оформить заказ"
                  onClick={handleOrder}
                >
                  Сделать заказ
                </button>
                <button
                  className={styles['cart-card__order-button']}
                  style={{ backgroundColor: '#b30000' }}
                  aria-label="Очистить корзину"
                  onClick={handleClearCart}
                >
                  Очистить
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

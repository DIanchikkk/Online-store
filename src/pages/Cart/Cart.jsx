import React from 'react';
import styles from './Cart.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../../features/cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const totalPrice = items.reduce(
    (total, item) =>
      total +
      parseFloat(item.price.replace(/\s*₽/, '').replace(/\s/g, '')) * item.quantity,
    0
  );

  return (
    <div className={styles.cart}>
      <h1 className={styles.cart__title}>Ваша корзина</h1>

      {items.length === 0 ? (
        <p className={styles.cart__empty}>Корзина пуста</p>
      ) : (
        <>
          <ul className={styles.cart__list}>
            {items.map(item => (
              <li key={item.id} className={styles.cart__item}>
                <img src={item.image} alt={item.name} className={styles.cart__image} />

                <div className={styles.cart__info}>
                  <span className={styles.cart__name}>{item.name}</span>

                  <div className={styles.cart__controls}>
                    <button
                      className={styles.cart__btn}
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      aria-label={`Уменьшить количество ${item.name}`}
                    >
                      −
                    </button>

                    <span className={styles.cart__quantity}>{item.quantity}</span>

                    <button
                      className={styles.cart__btn}
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      aria-label={`Увеличить количество ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className={styles.cart__actions}>
                  <span className={styles.cart__price}>{item.price}</span>

                  <div className={styles.cart__buttonsRow}>
                    <button
                      className={styles.cart__remove}
                      onClick={() => dispatch(removeFromCart(item.id))}
                      aria-label={`Удалить ${item.name} из корзины`}
                    >
                      Удалить
                    </button>

                    <button
                      className={styles.cart__favorite}
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

          <div className={styles.cart__footer}>
            <div className={styles.cart__total}>
              Итого: <span className={styles.cart__totalPrice}>{totalPrice.toLocaleString('ru-RU')} ₽</span>
            </div>
            <button
              className={styles.cart__orderButton}
              aria-label="Оформить заказ"
              onClick={() => alert('Ваш заказ принят! Спасибо!')}
            >
              Сделать заказ
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

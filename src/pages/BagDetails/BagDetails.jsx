import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { BackButton } from '../../shared/UI/BackButton/BackButton';
import { BagsCard } from '../../shared/UI/BagsCard/BagsCard';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './BagDetails.module.css';

const colorMap = {
  Черный: '#333333',
  Белый: '#F5F5F5',
  Красный: '#FFB3B3',
  Розовый: '#FFD6E0',
  Синий: '#A3C4F3',
  Зеленый: '#B8E0D2',
  Бежевый: '#F2E3D5',
  Серый: '#C8C8C8',
  Фиолетовый: '#D6C5FF',
};

export function BagDetails({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const bag = products.find(item => String(item.id) === id);

  const [selectedSize, setSelectedSize] = useState(bag?.sizes?.[0] || '');
  const [selectedColor, setSelectedColor] = useState(bag?.colors?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', phone: '' });
  const [paymentMethod, setPaymentMethod] = useState('cash');

  // Прокрутка страницы вверх при открытии
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!bag) return <p className={styles.notFound}>Товар не найден</p>;

  const handleAddToCart = (goToCart = false) => {
    dispatch(addToCart({ ...bag, quantity, selectedSize, selectedColor }));
    if (goToCart) navigate('/cart');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.phone) return;
    alert(`Заказ оформлен!\nОплата: ${paymentMethod === 'cash' ? 'Наличными' : 'Картой'}`);
  };

  const otherBags = products.filter(item => item.id !== bag.id);
  const collectionBags = products.filter(
    item => item.collectionId === bag.collectionId && item.id !== bag.id
  );

  return (
    <div className={styles.container}>
      <BackButton style={{ position: 'absolute', top: '50px', left: '50px' }} />

      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={bag.image} alt={bag.name} className={styles.productImage} />
        </div>

        <div className={styles.info}>
          <h2>{bag.name}</h2>
          <p className={styles.type}>{bag.type}</p>
          <p className={styles.description}>{bag.description}</p>
          <p className={styles.price}>{bag.price} ₽</p>

          {bag.sizes?.length > 0 && (
            <div className={styles.selectors}>
              <p>Размер (см):</p>
              <div className={styles.buttonsRow}>
                {bag.sizes.map(size => (
                  <button
                    key={size}
                    className={`${styles.sizeButton} ${selectedSize === size ? styles.activeButton : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {bag.colors?.length > 0 && (
            <div className={styles.selectors}>
              <p>Цвет:</p>
              <div className={styles.buttonsRow}>
                {bag.colors.map(color => (
                  <button
                    key={color}
                    className={`${styles.colorButton} ${selectedColor === color ? styles.activeButton : ''}`}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: colorMap[color] || 'gray' }}
                  />
                ))}
              </div>
            </div>
          )}

          <div className={styles.actionRow}>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
              className={styles.quantityInput}
            />
            <button className={styles.buyButton} onClick={() => handleAddToCart(true)}>Купить</button>
            <button className={styles.iconButton} onClick={() => handleAddToCart(false)}>
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.orderFormCard}>
        <form className={styles.userForm} onSubmit={handleSubmit}>
          <h3>Для заказа введите ваши данные</h3>
          <input
            type="text"
            placeholder="Имя"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Фамилия"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Телефон"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            pattern="^\+?\d{10,15}$"
          />
          <div className={styles.paymentOptions}>
            <button type="button" className={paymentMethod==='cash'?styles.activePayment:''} onClick={()=>setPaymentMethod('cash')}>Наличными</button>
            <button type="button" className={paymentMethod==='card'?styles.activePayment:''} onClick={()=>setPaymentMethod('card')}>Картой</button>
          </div>
          <button type="submit">Оплатить</button>
        </form>
      </div>

      <div className={styles.relatedSection}>
        <h4>С этим товаром смотрят</h4>
        <div className={styles.relatedItems}>
          {otherBags.map(item => <BagsCard key={item.id} bag={item} />)}
        </div>

        {bag.fromCollection && collectionBags.length > 0 && (
          <>
            <h4>Все с этим товаром и смотрят</h4>
            <div className={styles.relatedItems}>
              {collectionBags.map(item => <BagsCard key={item.id} bag={item} />)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

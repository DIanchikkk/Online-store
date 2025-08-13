import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Catalog.module.css';
import { CatalogSidebar } from './components/CatalogSidebar/CatalogSidebar';
import { CatalogContent } from './components/CatalogContent/CatalogContent';
import { collection } from '../../mocks/collection';
import { BackButton } from '../../shared/UI/BackButton/BackButton';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Catalog() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const params = new URLSearchParams(location.search);
  const collectionFromUrl = params.get('collection');

  const [activeCollectionId, setActiveCollectionId] = useState('eco');

  useEffect(() => {
    if (collectionFromUrl && collection.some(c => c.id === collectionFromUrl)) {
      setActiveCollectionId(collectionFromUrl);
    } else {
      setActiveCollectionId('eco');
    }
  }, [collectionFromUrl]);

  const activeCollection = collection.find(c => c.id === activeCollectionId);

  const handleItemAdded = (itemName) => {
    toast.success(`🛒 ${itemName} добавлен в корзину`, {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      className: 'custom-toast',
    });
  };

  return (
    <div className={styles.catalog}>
      <div className={styles.catalog__hero}>
        <BackButton />
        <h1 className={styles.catalog__titleEng}>Catalog</h1>
        <h2 className={styles.catalog__titleRus}>Каталог</h2>
      </div>

      <div className={styles.catalog__container}>
        <CatalogSidebar
          collections={collection}
          activeId={activeCollectionId}
          onSelect={setActiveCollectionId}
        />
        <CatalogContent
          collection={activeCollection}
          onItemAdd={handleItemAdded}
        />
      </div>
    </div>
  );
}

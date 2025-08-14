import { mockProducts } from './mockProducts';
import { discountedProducts } from './discountedProducts';
import { collection } from './collection';

const randomSizes = () => {
  const baseSizes = ['20', '25', '30', '35', '40', '45', '50'];
  return baseSizes
    .sort(() => 0.5 - Math.random())
    .slice(0, 5)
    .map(s => s + ' см');
};

const randomColors = () => {
  const colors = [
    'Черный', 'Белый', 'Красный', 'Синий',
    'Зеленый', 'Бежевый', 'Розовый', 'Серый', 'Фиолетовый'
  ];
  return colors.sort(() => 0.5 - Math.random()).slice(0, 5);
};

export const detailedProducts = [...mockProducts, ...discountedProducts].map(product => ({
  ...product,
  collectionId: 'eco', 
  sizes: randomSizes(),
  colors: randomColors(),
}));

export const collectionDetailedProducts = collection.flatMap(col =>
  (col.bags || []).map(bag => ({
    ...bag,
    collectionId: col.id, 
    sizes: randomSizes(),
    colors: randomColors(),
  }))
);

export const allDetailedProducts = [
  ...detailedProducts,
  ...collectionDetailedProducts
];

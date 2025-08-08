import collection from '../assets/img/collection.jpg';
import firstCollection from '../assets/img/first-collection.webp';
import secondCollection from '../assets/img/second-collection.webp';
import thirdCollection from '../assets/img/third-collection.webp';
import fourthCollection from '../assets/img/fourth-collection.webp';

export const collectionsData = [
  {
    id: 'eco',
    image: firstCollection,
    alt: 'Эко',
    label: 'Новая коллекция с Эко-кожей',
    positionClass: 'up',
  },
  {
    id: 'prints',
    image: secondCollection,
    alt: 'Принты',
    label: 'Сумки с принтами',
    positionClass: 'down',
  },
  {
    id: 'canes-umbrellas',
    image: thirdCollection,
    alt: 'Зонты',
    label: 'Зонты, трости',
    positionClass: 'up',
  },
  {
    id: 'classic',
    image: fourthCollection,
    alt: 'Классика',
    label: 'Классические сумки',
    positionClass: 'down',
  },
];

export const mainImage = collection;

import firstCane from '../assets/img/first-cane.jpg';
import secondCane from '../assets/img/second-cane.png';
import thirdCane from '../assets/img/third-cane.png';
import firstUmbrella from '../assets/img/first-umb.jpg';
import secondUmbrella from '../assets/img/second-umb.jpg';
import thirdUmbrella from '../assets/img/third-umb.jpg';
import fourthUmbrella from '../assets/img/fourth-umb.jpg';
import fifthUmbrella from '../assets/img/sixth-umb.jpg';
import sixthUmbrella from '../assets/img/first-umb.jpg';

import firstPrint from '../assets/img/first-print.jpg';
import secondPrint from '../assets/img/second-print.jpg';
import thirdPrint from '../assets/img/third-print.jpg';
import fourthPrint from '../assets/img/fourth-print.jpg';
import fifthPrint from '../assets/img/fifth-print.jpg';
import sixthPrint from '../assets/img/sixth-print.jpg';
import seventhPrint from '../assets/img/seventh-print.jpg';
import eighthPrint from '../assets/img/eighth-print.jpg';
import ninthPrint from '../assets/img/ninth-print.jpg';

import ninthEco from '../assets/img/ninth-eco.jpg';
import secondEco from '../assets/img/second-eco.jpg';
import thirdEco from '../assets/img/third-eco.jpg';
import fourthEco from '../assets/img/fourth-eco.jpg';
import fifthEco from '../assets/img/fifth-eco.jpg';
import sixthEco from '../assets/img/sixth-eco.jpg';
import seventhEco from '../assets/img/seventh-eco.jpg';
import eighthEco from '../assets/img/eighth-eco.jpg';
import firstEco from '../assets/img/ninth-eco.jpg';

import FirstBag from '../assets/img/first-bag.jpg';
import SecondBag from '../assets/img/second-bag.jpg';
import ThirdBag from '../assets/img/third-bag.jpg';
import FourthBag from '../assets/img/fourth-bag.jpg';
import FifthBag from '../assets/img/fifth-bag.jpg';
import SixthBag from '../assets/img/sixth-bag.jpg';

export const collection = [
  {
    id: 'eco',
    title: 'Эко-кожа',
    description: 'Новая коллекция из качественной эко-кожи',
    image: firstEco,
    bags: [
      { id: 'eco-1', name: 'Сумка Эко Лайт', description: 'Стильная и лёгкая сумка из эко-кожи.', price: '3500 ₽', image: firstEco },
      { id: 'eco-2', name: 'Городская эко-сумка', description: 'Практичная сумка с несколькими отделениями.', price: '4200 ₽', image: secondEco },
      { id: 'eco-3', name: 'Минималистичная эко-сумка', description: 'Лаконичный дизайн и удобство.', price: '2900 ₽', image: thirdEco },
      { id: 'eco-4', name: 'Эко-сумка на каждый день', description: 'Универсальный вариант для повседневного использования.', price: '3100 ₽', image: fourthEco },
      { id: 'eco-5', name: 'Стильная сумка-тоут', description: 'Вместительная и модная сумка из эко-кожи.', price: '3800 ₽', image: fifthEco },
      { id: 'eco-6', name: 'Сумка с декоративной строчкой', description: 'Элегантный акцент на сумке.', price: '3600 ₽', image: sixthEco },
      { id: 'eco-7', name: 'Сумка-мессенджер', description: 'Удобная сумка через плечо.', price: '4000 ₽', image: seventhEco },
      { id: 'eco-8', name: 'Сумка с металлическими деталями', description: 'Современный стиль и практичность.', price: '3900 ₽', image: eighthEco },
      { id: 'eco-9', name: 'Сумка с отделением для ноутбука', description: 'Практичная для работы и учёбы.', price: '4500 ₽', image: ninthEco },
    ],
  },
  {
    id: 'prints',
    title: 'Принты',
    description: 'Яркие сумки с авторскими принтами',
    image: firstPrint,
    bags: [
      { id: 'print-1', name: 'Сумка Принт Винтаж', description: 'Эксклюзивный принт с ретро-мотивами.', price: '3800 ₽', image: firstPrint },
      { id: 'print-2', name: 'Яркая городская сумка', description: 'Покажи свой стиль с этим насыщенным принтом.', price: '3200 ₽', image: secondPrint },
      { id: 'print-3', name: 'Сумка с геометрией', description: 'Современный дизайн и яркие цвета.', price: '2700 ₽', image: thirdPrint },
      { id: 'print-4', name: 'Принт с цветами', description: 'Нежный цветочный узор для весны.', price: '3500 ₽', image: fourthPrint },
      { id: 'print-5', name: 'Абстрактный принт', description: 'Современное искусство на твоей сумке.', price: '3600 ₽', image: fifthPrint },
      { id: 'print-6', name: 'Сумка с этническим узором', description: 'Уникальный дизайн с восточными мотивами.', price: '4000 ₽', image: sixthPrint },
      { id: 'print-7', name: 'Принт в стиле поп-арт', description: 'Яркий и необычный образ.', price: '4200 ₽', image: seventhPrint },
      { id: 'print-8', name: 'Сумка с животным принтом', description: 'Стильное решение для смелых.', price: '3900 ₽', image: eighthPrint },
      { id: 'print-9', name: 'Сумка с узором в полоску', description: 'Классика и современность вместе.', price: '3100 ₽', image: ninthPrint },
    ],
  },
  {
    id: 'canes-umbrellas',
    title: 'Зонты и трости ',
    description: 'Зонты и трости из нашей коллекции',
    image: firstUmbrella,
    bags: [
      { id: 'umb-1', name: 'Первый зонт', description: 'Надёжный и стильный зонт.', price: '1500 ₽', image: firstUmbrella },
      { id: 'umb-2', name: 'Второй зонт', description: 'Компактный и удобный.', price: '1600 ₽', image: secondUmbrella },
      { id: 'umb-3', name: 'Третий зонт', description: 'Легкий и прочный.', price: '1700 ₽', image: thirdUmbrella },
      { id: 'umb-4', name: 'Четвертый зонт', description: 'С красивым дизайном.', price: '1800 ₽', image: fourthUmbrella },
      { id: 'umb-5', name: 'Пятый зонт', description: 'Удобный для повседневного использования.', price: '1900 ₽', image: fifthUmbrella },
      { id: 'umb-6', name: 'Шестой зонт', description: 'Удобный для повседневного использования.', price: '1900 ₽', image: sixthUmbrella },
      { id: 'cane-1', name: 'Первая трость', description: 'Элегантная и практичная.', price: '3700 ₽', image: firstCane },
      { id: 'cane-2', name: 'Вторая трость', description: 'Удобная ручка и стиль.', price: '3800 ₽', image: secondCane },
      { id: 'cane-3', name: 'Третья трость', description: 'Качественные материалы.', price: '3900 ₽', image: thirdCane },
    ],
  },
  {
    id: 'classic',
    title: 'Классика',
    description: 'Вневременная классика — всегда в моде',
    image: FourthBag,
    bags: [
      { id: 'classic-1', name: 'Кожаная классика', description: 'Элегантная сумка из натуральной кожи.', price: '5200 ₽', image: FirstBag },
      { id: 'classic-2', name: 'Строгий портфель', description: 'Подходит как для работы, так и для повседневности.', price: '4800 ₽', image: SecondBag },
      { id: 'classic-3', name: 'Сумка на каждый день', description: 'Простая, но стильная сумка для любого случая.', price: '4100 ₽', image: ThirdBag },
      { id: 'classic-4', name: 'Классическая сумка-тоут', description: 'Вместительная и функциональная.', price: '5300 ₽', image: FourthBag },
      { id: 'classic-5', name: 'Деловая сумка', description: 'Идеальна для офисных встреч.', price: '5500 ₽', image: FifthBag },
      { id: 'classic-6', name: 'Сумка с металлическими деталями', description: 'Добавляет шика и элегантности.', price: '4900 ₽', image: SixthBag },
      { id: 'classic-7', name: 'Минималистичная кожаная сумка', description: 'Сдержанный стиль и удобство.', price: '4700 ₽', image: FirstBag },
      { id: 'classic-8', name: 'Кожаная сумка с ремнём', description: 'Подходит для повседневного ношения.', price: '4600 ₽', image: ThirdBag },
      { id: 'classic-9', name: 'Сумка с отделением для планшета', description: 'Практичное решение для работы и учебы.', price: '5100 ₽', image: FourthBag },
    ],
  },
];

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from '../shared/Layout/Layout';
import { Home } from '../pages/Home/Home';
import { Discounts } from '../pages/Discounts/Discounts';
import { Catalog } from '../pages/Catalog/Catalog';
import { Cart } from '../pages/Cart/Cart';
import { BagDetails } from '../pages/BagDetails/BagDetails';
import { ToastProvider } from "../shared/UI/ToastProvider/ToastProvider";

import { detailedProducts, collectionDetailedProducts } from '../mocks/detailedProducts';

export const App = () => {
  // объединяем массивы только для BagDetails
  const allProducts = [...detailedProducts, ...collectionDetailedProducts];

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="discounts" element={<Discounts products={detailedProducts} />} />
            <Route path="catalog" element={<Catalog products={collectionDetailedProducts} />} />
            <Route path="cart" element={<Cart />} />
            <Route path="bag/:id" element={<BagDetails products={allProducts} />} />
          </Route>
        </Routes>
      </Router>
      <ToastProvider />
    </div>
  );
};

export default App;

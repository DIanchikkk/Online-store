import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';

import { Layout } from '../shared/Layout/Layout';
import { Home } from '../pages/Home/Home';
import { Discounts } from '../pages/Discounts/Discounts';
import { Catalog } from '../pages/Catalog/Catalog';
import { Cart } from '../pages/Cart/Cart';

import { ToastProvider } from "../shared/UI/ToastProvider/ToastProvider";

export const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="discounts" element={<Discounts />} />
              <Route path="catalog" element={<Catalog />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </Router>
        <ToastProvider />
      </div>
    </Provider>
  );
};

export default App;

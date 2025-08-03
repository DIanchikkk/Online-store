import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './styles/App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DiscountNotice from './components/DiscountNotice/DiscountNotice';

import Home from './pages/Home/Home';
import Discounts from './pages/Discounts/Discounts';
import Catalog from './pages/Catalog/Catalog';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <Header />
          <DiscountNotice />

          <main className="app__main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/discounts" element={<Discounts />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>

          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;

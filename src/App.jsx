import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DiscountNotice from './components/DiscountNotice/DiscountNotice';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <DiscountNotice /> 
        <main className="app__main">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* другие страницы */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}


export default App;

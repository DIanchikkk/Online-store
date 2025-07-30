import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/casino" element={<Casino />} />
            <Route path="/about" element={<About />} />
            <Route path="/discounts" element={<Discounts />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;


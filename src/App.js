import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import CategoryPage from './pages/CategoryPage';
import Footer from './components/Footer';
import Header from './components/Header';
import bookServices from './services/bookServices';

bookServices.sendToServer();
const App = () => (
  <div className="main">
    <section>
      <Header />
      <Routes>
        <Route exact path="/" element={<BooksPage />} />
        <Route path="/categories" element={<CategoryPage />} />
      </Routes>
    </section>
    <section>
      <Footer />
    </section>
  </div>
);

export default App;

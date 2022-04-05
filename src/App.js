import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import CategoryPage from './pages/CategoryPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => (
  <div className="main">
    <section>
      <Navbar />
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

import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';

import './App.css';
import Login from './components/form/login/Login';
import Register from './components/form/register/Register';
import Contact from './components/form/contact/Contact';
import ProductDescription from './components/products/ProductDescription';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" index element={<Contact />} />
          <Route path="/product-description" index element={<ProductDescription />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

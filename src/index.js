import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import CartProvider from './context/CartProvider';
import AddProductForm from './views/AddProductForm';
import Products from './views/Products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <HashRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/' element={<AddProductForm />} />
            <Route path='/products' element={<Products />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </CartProvider>
  </React.StrictMode>
);

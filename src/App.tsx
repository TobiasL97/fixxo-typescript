import React from 'react';
import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductProvider  from './Contexts/ProductContext'
import HomeView from './Views/HomeView';
import ContactsView from './Views/ContactsView';
import ShoppingCartProvider from './Contexts/shoppingCartContext';
import NotFoundView from './Views/NotFoundView';
import Products from './Views/Products';
import ProductsDetailsView from './Views/ProductsDetailView'
import HandleProducts from './Views/HandleProducts';
import HandleProductsProvider from './Contexts/HandleProductsContext';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
      <ShoppingCartProvider>
      <ProductProvider>
      <HandleProductsProvider>
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/home" element={<HomeView />} />
            <Route path="*" element={<NotFoundView />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:name" element={<ProductsDetailsView />} />
            <Route path="/handleproduct" element={<HandleProducts />} />
            <Route path="/contacts" element={<ContactsView />} />
        </Routes>
        </HandleProductsProvider>
        </ProductProvider>
        </ShoppingCartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

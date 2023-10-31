import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PostProducts } from './views/postProducts.jsx';
import { ProductTest } from './views/producttest.jsx';
import { Cardsfront } from './components/cardsfront.jsx';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/postproducts" element={<PostProducts/>}/>
    <Route path="/test" element={<ProductTest/>}/>
    <Route path="/card" element={<Cardsfront/>}/>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

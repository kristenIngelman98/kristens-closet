import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import 'semantic-ui-css/semantic.min.css';
// import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './App';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import reportWebVitals from './reportWebVitals';
import ShoppingCart from './routes/ShoppingCart';
import AllShoes from './routes/AllShoes';
import ShippingBanner from './components/ShippingBanner';

import Signin from '../src/profile/Signin';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
 
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="shoes" element={<AllShoes />} />
        <Route path="login" element={<Signin />} />
      </Routes>
      <Footer />


    </BrowserRouter>




  </React.StrictMode>,
  document.getElementById('root')
);

// <Header />
// <App />
// <Footer />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// <Header />
// <Routes>
//   <Route path="/" element={<App />} />
  // <Route path="cart" element={<ShoppingCart />} />
  // <Route path="shoes" element={<AllShoes />} />
// </Routes>
// <Footer />
// </BrowserRouter>
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './HomeFolder/Header.jsx'
import Home from './HomeFolder/Home.jsx'
import Restaurants from './ResturantFolder/Restaurants.jsx'
import Services from './ResturantFolder/Services.jsx'
import Footer from './AboutFolder/Footer.jsx'
import ForSignup from './AlldetailsFolder/ForSignup.jsx'
import ForLogin from './AlldetailsFolder/ForLogin.jsx'
import Faqs from './ResturantFolder/Faqs.jsx'
import Vendors from './AlldetailsFolder/Restaurant.jsx'
import OrderPage from './ResturantFolder/OrderPage.jsx'
import CartPage from './AlldetailsFolder/CartPage.jsx'
import { CartProvider } from './AlldetailsFolder/CartContext.jsx'








createRoot(document.getElementById('root')).render(
  <StrictMode>
   <CartProvider>
    <BrowserRouter> 
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Restaurants' element={<Restaurants />} />
        <Route path='/OrderPage' element={<OrderPage />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/ForSignup' element={<ForSignup />} />
        <Route path='/ForLogin' element={<ForLogin />} />
        <Route path='/Faqs' element={<Faqs />} />
        <Route path='/Vendors' element={<Vendors />} />
        <Route path='/Cart' element={<CartPage />} />
      </Routes>
      <Footer />  
    </BrowserRouter>
    </CartProvider>
  </StrictMode>
);


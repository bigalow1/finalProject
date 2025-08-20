import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './HomeFolder/Home.jsx'
import About from './AboutFolder/About.jsx'
import Restaurants from './ResturantFolder/Restaurants.jsx'
import Services from './ResturantFolder/Services.jsx'
import Footer from './AboutFolder/Footer.jsx'
import ForSignup from './AlldetailsFolder/ForSignup.jsx'
import ForLogin from './AlldetailsFolder/ForLogin.jsx'
import Faqs from './ResturantFolder/Faqs.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Restaurants" element={<Restaurants />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Faqs" element={<Faqs />} />
      <Route path="/ForSignup" element={<ForSignup />} />
      <Route path="/ForLogin" element={<ForLogin />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
);


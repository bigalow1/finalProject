import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./HomeFolder/Header.jsx";
import Home from "./HomeFolder/Home.jsx";
import Restaurants from "./ResturantFolder/Restaurants.jsx";
import Services from "./ResturantFolder/Services.jsx";
import Footer from "./AboutFolder/Footer.jsx";
import ForSignup from "./AlldetailsFolder/ForSignup.jsx";
import ForLogin from "./AlldetailsFolder/ForLogin.jsx";
import Faqs from "./ResturantFolder/Faqs.jsx";
import Vendors from "./AlldetailsFolder/Restaurant.jsx";
import OrderPage from "./ResturantFolder/OrderPage.jsx";
import CartPage from "./AlldetailsFolder/CartPage.jsx";
import { CartProvider } from "./AlldetailsFolder/CartContext.jsx";
import { AuthProvider } from "./AlldetailsFolder/AuthContext.jsx";
import Dashboard from "./Admin/Dashboard.jsx";
import ApproveRestaurant from "./Admin/ApproveRestaurant.jsx";
import CheckoutPage from "./ResturantFolder/CheckoutPage.jsx";
import MonitorOrder from "./Admin/MonitorOrders.jsx";
import Orders from "./VendorFolder/Orders.jsx";
import UpdateAvailability from "./VendorFolder/UpdateAvailability.jsx";
import DebitCardPayment from "./HomeFolder/DebitCardPayment.jsx";
import ThankYouPage from "./HomeFolder/ThankYouPage.jsx";
import ManageUsers from "./Admin/ManageUsers.jsx";
import AdminRoute from "./Admin/AdminRoute.jsx";
import ProtectedRoute from "./AlldetailsFolder/ProtectedRoute.jsx";

import AddMenu from "./Admin/AddMenu.jsx";
import RestaurantDetails from "./ResturantFolder/RestaurantDetail.jsx";

// ✅ Layout wrapper to handle Header & Footer visibility
function Layout() {
  const location = useLocation();

  const hideFooterRoutes = ["/ForSignup", "/ForLogin"];
  const hideHeaderRoutes = [
    "/ForSignup",
    "/ForLogin",
    "/ApproveRestaurant",
    "/Dashboard",
  ];

  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Restaurants" element={<Restaurants />} />
        <Route path="/OrderPage" element={<OrderPage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ForSignup" element={<ForSignup />} />
        <Route path="/Login" element={<ForLogin />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/CartPage" element={<CartPage />} />
        {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/ApproveRestaurant" element={<ApproveRestaurant />} /> */}
        {/* <Route path="/restaurant/:id" element={<RestaurantDetails />} /> */}
        {/* 🔒 Admin-only */}
  <Route
    path="/Dash"
    element={
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    }
  />
  <Route
    path="/ApproveRestaurant"
    element={
      <AdminRoute>
        <ApproveRestaurant />
      </AdminRoute>
    }
  />
  <Route
    path="/Users"
    element={
      <AdminRoute>
        <ManageUsers />
      </AdminRoute>
    }
  />
  <Route
    path="/addmenu"
    element={
      <AdminRoute>
        <AddMenu />
      </AdminRoute>
    }
  />
   <Route
    path="/Update"
    element={
      <ProtectedRoute>
        <UpdateAvailability />
      </ProtectedRoute>
    }
  />
  <Route
    path="/order"
    element={
      <ProtectedRoute>
        <MonitorOrder />
      </ProtectedRoute>
    }
  />
   <Route
    path="/Orders"
    element={
      <ProtectedRoute>
        <Orders />
      </ProtectedRoute>
    }
  />

  {/* 🔒 Normal users */}
  <Route
    path="/CheckoutPage"
    element={
      <ProtectedRoute>
        <CheckoutPage />
      </ProtectedRoute>
    }
  />
  <Route
    path="/restaurant/:id"
    element={<RestaurantDetails />}
  />
  
 
 
        {/* <Route path="/order" element={<MonitorOrder />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Users" element={<ManageUsers />} />
        <Route path="/Update" element={<UpdateAvailability />} />
        <Route path="/dash" element={<Dashboard />} /> */}
        <Route path="/payment" element={<DebitCardPayment />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/admin" element={<AdminRoute />} />
        <Route path="/addmenu" element={<AddMenu />} />
      </Routes>

      {!shouldHideFooter && <Footer />}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);

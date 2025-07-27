import { Routes, Route, Navigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header';
import Footer from './components/Footer';

import MainPage from './pages/MainPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BuyerHome from './pages/BuyerHome';
import SellerHome from './pages/SellerHome';
import SellerDonutPage from './pages/SellerDonutPage';
import BuyerDonutPage from './pages/BuyerDonutPage';
import BuyerCartPage from './pages/BuyerCartPage';
import MyOrdersPage from './pages/MyOrdersPage';
import AboutUs from './pages/AboutUs';
import BuyerProfilePage from './pages/BuyerProfilePage';
import SellerOrdersPage from './pages/SellerOrdersPage';
import ManageUsersPage from './pages/ManageUsersPage';

// Remove these imports until you create the files:
// import AdminUserPage from './pages/AdminUserPage';
// import SellerOrderPage from './pages/SellerOrderPage';

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/buyer/home" element={<BuyerHome />} />
          <Route path="/seller/home" element={<SellerHome />} />
          <Route path="/seller/donuts" element={<SellerDonutPage />} />
          <Route path="/buyer/donuts" element={<BuyerDonutPage />} />
          <Route path="/buyer/cart" element={<BuyerCartPage />} />
          <Route path="/buyer/orders" element={<MyOrdersPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/buyer/profile" element={<BuyerProfilePage />} />
          <Route path="/seller/orders" element={<SellerOrdersPage />} />
        <Route path="/seller/manage-users" element={<ManageUsersPage />} />

          
          {/* Remove or comment out until you create these pages */}
          {/* <Route path="/seller/users" element={<AdminUserPage />} /> */}
          {/* <Route path="/seller/orders" element={<SellerOrderPage />} /> */}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
}

export default App;
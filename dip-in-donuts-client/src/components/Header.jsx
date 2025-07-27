import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Header() {
  const [role, setRole] = useState(() => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).role : null;
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    setRole(user ? JSON.parse(user).role : null);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setRole(null);
    navigate('/');
  };

  return (
    <header className="bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between flex-wrap gap-y-3">
        {/* Logo */}
        <div className="flex items-center space-x-3 flex-grow-0">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/11/b7/5e/11b75eda71b0a566e837136e9f5f88fb.jpg"
              alt="Dip in Donuts Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <Link
            to="/"
            className="text-xl font-bold tracking-wide hover:text-pink-100 transition-colors whitespace-nowrap"
          >
            Dip in Donuts
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center gap-3 ml-10 text-sm md:text-base whitespace-nowrap">
          {!role && (
            <>
              <Link to="/" className="px-2 py-1 hover:bg-pink-300 rounded-md transition">Home</Link>
              <Link to="/#menu" className="px-2 py-1 hover:bg-pink-300 rounded-md transition">Menu</Link>
               <Link to="/#special-order" className="px-2 py-1 hover:bg-pink-300 rounded-md transition">Special Order</Link>
              <Link to="/#reviews" className="px-2 py-1 hover:bg-pink-300 rounded-md transition">Review</Link>
              <Link to="/about" className="px-2 py-1 hover:bg-pink-300 rounded-md transition">About Us</Link>
            </>
          )}

          {role === 'buyer' && (
            <>
            <Link to="/buyer/home" className="px-2 py-1 hover:bg-pink-300 rounded-md transition">Home</Link>
              <Link to="/buyer/donuts" className="px-2 py-1 hover:bg-pink-300 rounded-md transition"> All Donuts</Link>
              <Link to="/buyer/cart" className="px-2 py-1 hover:bg-pink-300 rounded-md transition">My Cart</Link>
              <Link to="/buyer/orders" className="px-2 py-1 hover:bg-pink-300 rounded-md transition">My Orders</Link>
              <Link to="/buyer/profile" className="px-2 py-1 hover:bg-pink-300 rounded-md transition">My Profile</Link>
             <Link to="/about" className="px-2 py-1 hover:bg-pink-300 rounded-md transition">About Us</Link>
            </>
          )}

{role === 'seller' && (
  <>
    <Link to="/seller/home" className="px-2 py-1 hover:bg-pink-300 rounded-md transition">
      Home
    </Link>
    <Link to="/seller/donuts" className="px-2 py-1 hover:bg-pink-300 rounded-md transition">
      My Donuts
    </Link>
       <Link to="/seller/orders" className="px-2 py-1 hover:bg-pink-300 rounded-md transition">
          Orders
        </Link>
        <Link to="/seller/manage-users" className="px-2 py-1 hover:bg-pink-300 rounded-md transition">
          Manage Users
        </Link>
 <Link to="/about" className="px-2 py-1 hover:bg-pink-300 rounded-md transition">
      About Us
    </Link>
  </>
)}
        </nav>

        {/* Auth Buttons / Logout */}
        <div className="flex items-center gap-4 ml-auto">
          {!role ? (
            <>
              <Link to="/login" className="px-3 py-1 bg-white text-pink-600 rounded-md hover:bg-opacity-90 text-sm font-medium">Login</Link>
              <Link to="/signup" className="px-3 py-1 bg-white text-pink-600 rounded-md hover:bg-opacity-90 text-sm font-medium">Sign Up</Link>
            </>
          ) : (
            <>
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-white">{role === 'buyer' ? 'B' : 'S'}</span>
              </div>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-pink-600 rounded-md hover:bg-pink-700 text-sm font-medium"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
import React, { useState } from 'react';
import { ShoppingCart, Star, ChevronDown, Menu, X, User, LogOut, Eye, EyeOff } from 'lucide-react';
import {useNavigate} from "react-router-dom"

export default function DonutShop() {

  const navigation = useNavigate()
  const [selectedSize, setSelectedSize] = useState('XS (10CM)');
  const [selectedFilling, setSelectedFilling] = useState('DARK CHOCOLATE');
  const [selectedGlaze, setSelectedGlaze] = useState('CHOCOLATE');
  const [selectedToppings, setSelectedToppings] = useState('SPRINKLES');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Authentication states
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Form states
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginForm.email && loginForm.password) {
      setUser({
        name: loginForm.email.split('@')[0],
        email: loginForm.email
      });
      setIsLoggedIn(true);
      setIsLoginModalOpen(false);
      setLoginForm({ email: '', password: '' });
    }
  };

  // Handle register
  const handleRegister = (e) => {
    e.preventDefault();
    if (registerForm.password !== registerForm.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (registerForm.name && registerForm.email && registerForm.password) {
      setUser({
        name: registerForm.name,
        email: registerForm.email
      });
      setIsLoggedIn(true);
      setIsLoginModalOpen(false);
      setRegisterForm({ name: '', email: '', password: '', confirmPassword: '' });
      setIsRegisterMode(false);
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  // Close modal
  const closeModal = () => {
    setIsLoginModalOpen(false);
    setIsRegisterMode(false);
    setLoginForm({ email: '', password: '' });
    setRegisterForm({ name: '', email: '', password: '', confirmPassword: '' });
  };

  const featuredDonuts = [
    {
      name: 'CHOCOLATE BOOM',
      price: 'Rs 120',
      description: 'FILLED WITH DARK CHOCOLATE',
      image: '🍩',
      bgColor: 'bg-amber-100'
    },
    {
      name: 'BLUEBERRY',
      price: 'Rs 130',
      description: 'FILLED WITH BLUEBERRY JAM',
      image: '🫐',
      bgColor: 'bg-blue-100'
    },
    {
      name: 'HOMER',
      price: 'Rs 150',
      description: 'FILLED WITH RASPBERRY JAM',
      image: '🍩',
      bgColor: 'bg-pink-100'
    }
  ];

  const comboSets = [
    {
      name: 'CHOCOLATE DONUTS',
      description: 'Dark chocolate dipped in ganache',
      price: 'Rs 1299',
      image: '🍫'
    },
    {
      name: 'HOMER DONUTS',
      description: 'Fluffy ice, and full of pink frosting',
      price: 'Rs 1439',
      image: '🍩'
    },
    {
      name: 'CARAMEL DONUTS',
      description: 'Buttery, caramel drizzled donut',
      price: 'Rs 1529',
      image: '🧈'
    }
  ];

  const reviews = [
    {
      name: 'YALE',
      rating: 5,
      text: 'I love the dip in donut and the frosting because it any mouth. Perfectly spiced and not overly sweet. I can how they make this wonderful donuts.'
    },
    {
      name: 'KAYLA',
      rating: 5,
      text: 'I have been their customer for like a year now and I must say they are the best. The Donut donut is not just cute it\'s delicious! The pink glaze and sprinkles make it a perfect sweet childhood memories.'
    },
    {
      name: 'WILLIAM',
      rating: 5,
      text: 'Delivery was so smooth and quick and they were gone in minutes! Everyone had asking where they were from. The donuts were perfectly moist and sweet but not too sweet.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100">
      {/* Login/Register Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md relative animate-fade-in">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🍩</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {isRegisterMode ? 'Join the Sweetness!' : 'Welcome Back!'}
              </h2>
              <p className="text-gray-600 mt-2">
                {isRegisterMode ? 'Create your account to order delicious donuts' : 'Sign in to your account'}
              </p>
            </div>

            {/* Login Form */}
            {!isRegisterMode ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent pr-10"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Sign In
                </button>
              </form>
            ) : (
              /* Register Form */
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={registerForm.name}
                    onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={registerForm.email}
                    onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={registerForm.password}
                      onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent pr-10"
                      placeholder="Create a password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={registerForm.confirmPassword}
                      onChange={(e) => setRegisterForm({...registerForm, confirmPassword: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent pr-10"
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Create Account
                </button>
              </form>
            )}

            {/* Toggle between login and register */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                {isRegisterMode ? "Already have an account?" : "Don't have an account?"}
                <button
                  onClick={() => setIsRegisterMode(!isRegisterMode)}
                  className="text-pink-500 hover:text-pink-600 font-semibold ml-2"
                >
                  {isRegisterMode ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>

            {/* Demo credentials */}
            {!isRegisterMode && (
              <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                <p className="text-xs text-gray-600 text-center">
                  <strong>Demo:</strong> Use any email and password to login
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-pink-300/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🍩</span>
              </div>
              <span className="text-2xl font-bold text-pink-800">Dip in Donuts</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-pink-800 hover:text-pink-600 font-semibold">Home</a>
              <a href="#" className="text-pink-800 hover:text-pink-600 font-semibold">Menu</a>
              <a href="#" className="text-pink-800 hover:text-pink-600 font-semibold">About Us</a>
              <a href="#" className="text-pink-800 hover:text-pink-600 font-semibold">Contact</a>
              <a href="#" className="text-pink-800 hover:text-pink-600 font-semibold">Reviews</a>
              <a href="#" className="text-pink-800 hover:text-pink-600 font-semibold">Special Order</a>
            </nav>

            <div className="flex items-center space-x-4">
              <ShoppingCart className="w-6 h-6 text-pink-800 cursor-pointer hover:text-pink-600" />
              
              {/* User Authentication */}
              {isLoggedIn ? (
                <div className="relative group">
                  <div className="flex items-center space-x-2 cursor-pointer bg-pink-200 px-3 py-2 rounded-full">
                    <User className="w-5 h-5 text-pink-800" />
                    <span className="text-pink-800 font-semibold text-sm">{user?.name}</span>
                  </div>
                  <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="px-4 py-2 border-b">
                      <p className="font-semibold text-gray-800">{user?.name}</p>
                      <p className="text-sm text-gray-600">{user?.email}</p>
                    </div>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700">My Orders</button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700">Profile Settings</button>
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 flex items-center space-x-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              ) : (
                <button 
                  onClick={() => navigation("/login")}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full font-semibold text-sm transition-colors flex items-center space-x-2"
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </button>
              )}
              
              <button 
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-pink-400/30 pt-4">
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-pink-800 hover:text-pink-600 font-semibold py-2">Home</a>
                <a href="#" className="text-pink-800 hover:text-pink-600 font-semibold py-2">Menu</a>
                <a href="#" className="text-pink-800 hover:text-pink-600 font-semibold py-2">About Us</a>
                <a href="#" className="text-pink-800 hover:text-pink-600 font-semibold py-2">Contact</a>
                <a href="#" className="text-pink-800 hover:text-pink-600 font-semibold py-2">Reviews</a>
                <a href="#" className="text-pink-800 hover:text-pink-600 font-semibold py-2">Special Order</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                Welcome to <span className="text-pink-600">Dip in Donuts</span>
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                Sweetness Delivered Daily
              </p>
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg">
                {isLoggedIn ? 'ORDER NOW' : 'ORDER NOW'}
              </button>
              
              {!isLoggedIn && (
                <button 
                  onClick={() => setIsLoginModalOpen(true)}
                  className="bg-white hover:bg-gray-100 text-pink-600 px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg border-2 border-pink-500"
                >
                  LOGIN TO ORDER
                </button>
              )}
            </div>
            <div className="relative">
              <div className="text-9xl animate-bounce">🍩</div>
              <div className="absolute -top-4 -right-4 text-6xl animate-pulse">🍩</div>
              <div className="absolute -bottom-4 -left-4 text-5xl animate-bounce delay-300">🍩</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Donuts */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-green-600 mb-2">TRY THEM</h2>
              <h2 className="text-4xl font-bold text-green-600">TODAY!</h2>
            </div>
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg transform -rotate-12 font-bold">
              FREE DELIVERY<br/>ON ORDERS OVER<br/>RS 500
            </div>
            <button className="text-gray-600 hover:text-gray-800 font-semibold">SEE ALL</button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredDonuts.map((donut, index) => (
              <div key={index} className={`${donut.bgColor} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                <div className="text-center">
                  <div className="text-6xl mb-4">{donut.image}</div>
                  <h3 className="font-bold text-lg mb-2">{donut.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{donut.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-pink-600">{donut.price}</span>
                    <div className="flex items-center space-x-2">
                      <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100">-</button>
                      <span className="font-semibold">1</span>
                      <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Donut Builder */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-600 mb-8">
                CREATE YOUR<br/>SPECIAL TASTE!
              </h2>

              <div className="bg-pink-100 rounded-2xl p-6 mb-6">
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-bold text-pink-600">IMPORTANT NOTE:</span><br/>
                  All donuts are freshly made with no preservatives. Order before 2 PM for same-day delivery in Kathmandu, free delivery for orders over Rs 500. We will deliver within 2 hour notice. We accept eSewa, Khalti, and Cash on Delivery. Closed on public holidays.
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-2">SIZE</label>
                    <select 
                      className="w-full p-3 border rounded-lg bg-white"
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                    >
                      <option>XS (10CM)</option>
                      <option>S (12CM)</option>
                      <option>M (15CM)</option>
                      <option>L (18CM)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">FILLING</label>
                    <select 
                      className="w-full p-3 border rounded-lg bg-white"
                      value={selectedFilling}
                      onChange={(e) => setSelectedFilling(e.target.value)}
                    >
                      <option>DARK CHOCOLATE</option>
                      <option>VANILLA CREAM</option>
                      <option>STRAWBERRY JAM</option>
                      <option>BLUEBERRY JAM</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-2">GLAZE</label>
                    <select 
                      className="w-full p-3 border rounded-lg bg-white"
                      value={selectedGlaze}
                      onChange={(e) => setSelectedGlaze(e.target.value)}
                    >
                      <option>CHOCOLATE</option>
                      <option>VANILLA</option>
                      <option>STRAWBERRY</option>
                      <option>MAPLE</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">TOPPINGS</label>
                    <select 
                      className="w-full p-3 border rounded-lg bg-white"
                      value={selectedToppings}
                      onChange={(e) => setSelectedToppings(e.target.value)}
                    >
                      <option>SPRINKLES</option>
                      <option>NUTS</option>
                      <option>COCONUT</option>
                      <option>CHOCOLATE CHIPS</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full w-80 h-80 mx-auto flex items-center justify-center text-9xl animate-spin-slow">
                🍩
              </div>
              <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg">
                {isLoggedIn ? 'ADD TO CART - Rs 180' : 'LOGIN TO ADD'}
              </button>
              
              {!isLoggedIn && (
                <p className="text-sm text-gray-600 mt-2">Please login to customize and order donuts</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Combo Sets */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-green-600 mb-12">COMBO SET</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {comboSets.map((combo, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-pink-200 to-orange-200 flex items-center justify-center text-6xl">
                  {combo.image}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-pink-600">{combo.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{combo.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-pink-600">{combo.price}</span>
                    <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full font-semibold text-sm transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">OUR MISSION</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our mission is to bring joy and sweetness to every bite by crafting delicious, high-quality donuts made with love and the freshest ingredients. We strive to create a warm, welcoming experience where every customer feels special and leaves with a smile.
              </p>
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-colors">
                MORE
              </button>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-200 to-orange-300 rounded-full w-80 h-80 mx-auto flex items-center justify-center text-8xl">
                🍩
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">CUSTOMER REVIEWS</h2>
          <p className="text-center text-gray-600 mb-12">
            "Thousands of donuts served, countless smiles made. Here's what people are saying about their journey with us."
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-pink-100 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-pink-300 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  👤
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <h3 className="font-bold text-lg mb-4">{review.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">🍩</span>
                </div>
                <span className="text-2xl font-bold">DIP IN DONUTS</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Link</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Share Location</a></li>
                <li><a href="#" className="hover:text-white">Orders Tracking</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
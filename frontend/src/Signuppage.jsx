import React, { useState } from 'react';
import { Eye, EyeOff, Mail, User, Lock, Phone } from 'lucide-react';

export default function DonutAuthPages() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your authentication logic here
  };

  const togglePage = () => {
    setIsLoginPage(!isLoginPage);
    // Reset form when switching pages
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-rose-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Real Donut Background Elements - Matching your reference image style */}
      <div className="absolute inset-0 opacity-15">
        {/* Main Chocolate Donut with Pink Frosting - Like your reference */}
        <div className="absolute top-16 left-8 sm:left-12 w-24 h-24 sm:w-28 sm:h-28 transform rotate-12">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-700 to-yellow-800 shadow-lg">
            <div className="absolute inset-4 sm:inset-5 rounded-full bg-white shadow-inner"></div>
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 opacity-90"></div>
            <div className="absolute inset-4 sm:inset-5 rounded-full bg-white"></div>
          </div>
        </div>
        
        {/* Chocolate Glazed Donut */}
        <div className="absolute top-1/4 right-8 sm:right-16 w-28 h-28 sm:w-32 sm:h-32 transform -rotate-30">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-700 to-yellow-800 shadow-lg">
            <div className="absolute inset-5 sm:inset-6 rounded-full bg-white shadow-inner"></div>
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-amber-600 to-yellow-700 opacity-90"></div>
            <div className="absolute inset-5 sm:inset-6 rounded-full bg-white"></div>
          </div>
        </div>
        
        {/* Pink Frosted Donut */}
        <div className="absolute bottom-20 sm:bottom-24 left-1/4 w-20 h-20 sm:w-24 sm:h-24 transform rotate-45">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-700 to-yellow-800 shadow-lg">
            <div className="absolute inset-3 sm:inset-4 rounded-full bg-white shadow-inner"></div>
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 opacity-90"></div>
            <div className="absolute inset-3 sm:inset-4 rounded-full bg-white"></div>
          </div>
        </div>
        
        {/* Strawberry Frosted Donut */}
        <div className="absolute bottom-1/3 right-4 sm:right-8 w-18 h-18 sm:w-20 sm:h-20 transform -rotate-15">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-700 to-yellow-800 shadow-lg">
            <div className="absolute inset-2 sm:inset-3 rounded-full bg-white shadow-inner"></div>
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 opacity-90"></div>
            <div className="absolute inset-2 sm:inset-3 rounded-full bg-white"></div>
          </div>
        </div>
        
        {/* Caramel Glazed Donut */}
        <div className="absolute top-1/2 left-4 sm:left-8 w-16 h-16 sm:w-18 sm:h-18 transform rotate-75">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-700 to-yellow-800 shadow-lg">
            <div className="absolute inset-2 rounded-full bg-white shadow-inner"></div>
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 opacity-90"></div>
            <div className="absolute inset-2 rounded-full bg-white"></div>
          </div>
        </div>
        
        {/* Chocolate Frosted Donut */}
        <div className="absolute top-3/4 right-1/4 w-18 h-18 sm:w-22 sm:h-22 transform -rotate-60">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-700 to-yellow-800 shadow-lg">
            <div className="absolute inset-2 sm:inset-3 rounded-full bg-white shadow-inner"></div>
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-amber-800 to-yellow-900 opacity-90"></div>
            <div className="absolute inset-2 sm:inset-3 rounded-full bg-white"></div>
          </div>
        </div>
      </div>

      {/* Main Form Container */}
      <div className="w-full max-w-md relative z-10 mx-auto px-4">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 border border-pink-100/50 relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-50/30 to-transparent"></div>
          
          <div className="relative">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-700 to-yellow-800 rounded-full mb-4 shadow-xl relative">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 relative">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full mx-auto mt-2 sm:mt-2.5 shadow-sm"></div>
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Dip in Donuts
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                {isLoginPage ? 'Welcome back! Please login to continue.' : 'Join our sweet community!'}
              </p>
            </div>

            {/* Form */}
            <div className="space-y-4 sm:space-y-6">
              {!isLoginPage && (
                <>
                  {/* Name Fields - Only for Sign Up */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="relative group">
                      <User className="absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 placeholder-gray-400"
                        required
                      />
                    </div>
                    <div className="relative group">
                      <User className="absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone - Only for Sign Up */}
                  <div className="relative group">
                    <Phone className="absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 placeholder-gray-400"
                      required
                    />
                  </div>
                </>
              )}

              {/* Email */}
              <div className="relative group">
                <Mail className="absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
                <input
                  type="email"
                  name="email"
                  placeholder={isLoginPage ? "you@example.com" : "Email Address"}
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 placeholder-gray-400"
                  required
                />
              </div>

              {/* Password */}
              <div className="relative group">
                <Lock className="absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-9 sm:pl-10 pr-10 sm:pr-12 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 placeholder-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-pink-500 transition-colors"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>

              {!isLoginPage && (
                /* Confirm Password - Only for Sign Up */
                <div className="relative group">
                  <Lock className="absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-9 sm:pl-10 pr-10 sm:pr-12 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 placeholder-gray-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-pink-500 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              )}

              {isLoginPage && (
                /* Remember Me & Forgot Password - Only for Login */
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 focus:ring-2"
                    />
                    <span className="ml-2 text-pink-600">Remember me</span>
                  </label>
                  <button
                    type="button"
                    className="text-pink-600 hover:text-pink-700 hover:underline transition-colors"
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2.5 sm:py-3 px-6 rounded-xl font-semibold shadow-lg hover:from-pink-600 hover:to-rose-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 transform hover:scale-105 transition-all duration-300 hover:shadow-xl text-sm sm:text-base"
              >
                {isLoginPage ? 'Login' : 'Join the Sweet Life 🍩'}
              </button>

              {/* Page Toggle */}
              <div className="text-center">
                <span className="text-gray-600 text-sm sm:text-base">
                  {isLoginPage ? "Don't have an account? " : "Already have an account? "}
                </span>
                <button
                  type="button"
                  onClick={togglePage}
                  className="text-pink-600 hover:text-pink-700 font-medium transition-colors duration-300 hover:underline text-sm sm:text-base"
                >
                  {isLoginPage ? 'Sign Up' : 'Sign In Instead'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 px-4">
          By {isLoginPage ? 'logging in' : 'signing up'}, you agree to our{' '}
          <span className="text-pink-600 hover:underline cursor-pointer">Terms of Service</span> and{' '}
          <span className="text-pink-600 hover:underline cursor-pointer">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}
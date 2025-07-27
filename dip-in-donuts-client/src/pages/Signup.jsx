import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from '../api/api';

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    try {
      await API.post('/auth/signup', {
        name,
        email,
        password,
        role: 'buyer', // 👈 force buyer role
      });

      toast.success('Signup successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex flex-row">
      {/* Left image side */}
      <div className="hidden md:block w-3/5 h-screen">
        <img
          src="https://i.pinimg.com/736x/62/1a/fa/621afa0f4f80e7b866684bd8c1f29168.jpg"
          alt="Delicious donuts"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right form side */}
      <div className="flex flex-col justify-center w-2/5 h-screen bg-pink-50">
        <form
          onSubmit={handleSubmit}
          className="w-full h-full bg-white bg-opacity-90 backdrop-blur-sm shadow-sm rounded-none"
        >
          <div className="h-full flex flex-col justify-center px-8">
            <h2 className="text-2xl font-bold mb-6 text-pink-700 text-center">
              🍩 Dip in Donuts Signup
            </h2>

            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <label className="block mb-2 font-semibold">Password</label>
            <div className="relative mb-4">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                className="absolute right-2 top-2 text-gray-600"
                tabIndex={-1}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>

            <label className="block mb-2 font-semibold">Confirm Password</label>
            <div className="relative mb-6">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                required
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(prev => !prev)}
                className="absolute right-2 top-2 text-gray-600"
                tabIndex={-1}
              >
                {showConfirmPassword ? '🙈' : '👁️'}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
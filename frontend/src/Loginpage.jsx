import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-pink-600 text-center mb-2">🍩 Dip in Donuts</h2>
        <p className="text-center text-pink-500 mb-6">Welcome back! Please login to continue.</p>

        <form className="space-y-4">
          <div>
            <label className="block text-pink-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label className="block text-pink-700 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div className="flex justify-between items-center text-sm text-pink-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-pink-500" />
              Remember me
            </label>
            <a href="#" className="hover:underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-pink-500 text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-pink-600 font-semibold hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

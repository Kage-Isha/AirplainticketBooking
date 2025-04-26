"use client";

import Link from 'next/link';
import { FaUser, FaEnvelope, FaLock, FaLockOpen } from 'react-icons/fa';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-md space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 text-center mb-12">
            <span className="text-prime-100">Sign Up</span> to Join Us
          </h1>

          <form
            className="w-full space-y-6"
            action="/api/signup"
            method="POST"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-blue-800 mb-4">Create an Account</h3>

            {/* Full Name Field */}
            <div className="flex items-center border rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400">
              <FaUser className="text-gray-400 mr-3" />
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                required
                className="w-full focus:outline-none"
              />
            </div>

            {/* Email Field */}
            <div className="flex items-center border rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400">
              <FaEnvelope className="text-gray-400 mr-3" />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full focus:outline-none"
              />
            </div>

            {/* Password Field */}
            <div className="flex items-center border rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400">
              <FaLock className="text-gray-400 mr-3" />
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                required
                className="w-full focus:outline-none"
              />
            </div>

            {/* Confirm Password Field */}
            <div className="flex items-center border rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400">
              <FaLockOpen className="text-gray-400 mr-3" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                required
                className="w-full focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
              Sign Up
            </button>
            <br/>
            <br/>
            <Link href="/signin">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
              Sign In
            </button>
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
}

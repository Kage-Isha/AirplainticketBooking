"use client";

import Link from 'next/link';
import { FaUser, FaLock } from 'react-icons/fa';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow max-w-full mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 text-center mb-12">
          <span className="text-prime-100">Sign In</span> to Utilize Us
        </h1>

        <div className="flex flex-col gap-10">
          {/* Sign-Up Form */}
          <form
            className="w-full bg-white p-6 sm:p-8 rounded-xl shadow-md space-y-6"
            action="/api/signup"
            method="POST"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-blue-800 mb-4">Login To Account</h3>

            {/* Username */}
            <div className="flex items-center border rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400">
              <FaUser className="text-gray-400 mr-3" />
              <input
                type="text"
                name="username"
                placeholder="Your username"
                required
                className="w-full focus:outline-none"
              />
            </div>

            {/* Password */}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
              Sign In
            </button>
            <br/>
            <br/>
            <Link href="/signup">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
              Sign Up
            </button>
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
}

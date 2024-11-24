import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-wide">
          <Link href="/" className="hover:text-yellow-300 transition-all duration-300">
            Tech<span className="text-yellow-300">Hive</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link
            href="/"
            className="text-white font-medium hover:underline hover:text-yellow-300 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/fetchposts"
            className="text-white font-medium hover:underline hover:text-yellow-300 transition-all duration-300"
          >
            Posts
          </Link>
        </div>

        {/* Call-to-Action Button */}
        <div>
          <Link
            href="/subscribe"
            className="bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-full shadow-md hover:bg-yellow-500 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

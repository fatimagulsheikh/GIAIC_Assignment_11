import Image from 'next/image';
import React from 'react';

const Hersection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-16 px-8 lg:flex lg:items-center lg:justify-between">
      {/* Content Section */}
      <div className="max-w-lg lg:mr-10">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
          Unlock Your <span className="text-yellow-300">Tech Insight</span>
        </h1>
        <p className="text-lg lg:text-xl mb-6 leading-relaxed">
        "Discover the future of technology with insights, trends, and breakthroughs that shape the world around us."
        </p>
        <a
          href="/fetchposts"
          className="inline-block bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-500 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-110"
        >
          Explore Now
        </a>
      </div>

      {/* Image Section */}
      <div className="mt-8 lg:mt-0">
        <Image
          src="/pic1.png"
          alt="Hero Image"
          width={500}
          height={300}
          className="rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 opacity-30 rounded-full blur-lg -z-10"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-600 opacity-20 rounded-full blur-lg -z-10"></div>
    </div>
  );
};

export default Hersection;






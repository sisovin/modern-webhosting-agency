"use client";

import React from 'react';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Modern Web Hosting for Your Business</h1>
            <p className="text-xl mb-8">Fast, secure, and reliable hosting services tailored for your needs.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/hosting" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg text-center">
                View Plans
              </Link>
              <Link href="/contact" className="border border-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-lg text-center transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-lg shadow-xl bg-white p-2 max-w-lg mx-auto">              <img 
                src="/images/server-illustration.svg" 
                alt="Web Hosting Illustration" 
                className="w-full h-auto"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/600x400/f0f4ff/3b82f6?text=Modern+Web+Hosting';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

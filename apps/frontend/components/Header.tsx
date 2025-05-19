"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { UserNav } from './user-nav';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
    <header className={`sticky top-0 w-full z-10 ${isSticky ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-white dark:bg-gray-900'} transition-all duration-300`}>
      <div className="container mx-auto px-6 py-4 flex flex-wrap justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          COPA Webhosting
        </Link>
          {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{isMobileMenuOpen ? "Close menu" : "Open menu"}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
          {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 font-medium transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 font-medium transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/hosting" className="hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 font-medium transition-colors duration-200">
                  Hosting
                </Link>
              </li>
              <li>
                <Link href="/domain" className="hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 font-medium transition-colors duration-200">
                  Domains
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 font-medium transition-colors duration-200">
                  Contact
                </Link>            </li>
            </ul>
          </nav>
          {/* Theme Switcher and Avatar with dropdown-menu */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <UserNav />
          </div>
        </div>
      </div>
        {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <nav className="container mx-auto px-6">
            <ul className="space-y-3">
              <li>                <Link 
                  href="/" 
                  className="block py-2 px-4 rounded hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>                <Link 
                  href="/about" 
                  className="block py-2 px-4 rounded hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>                <Link 
                  href="/hosting" 
                  className="block py-2 px-4 rounded hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hosting
                </Link>
              </li>
              <li>                <Link 
                  href="/domain" 
                  className="block py-2 px-4 rounded hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Domains
                </Link>
              </li>
              <li>                <Link 
                  href="/contact" 
                  className="block py-2 px-4 rounded hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact                </Link>
              </li>
            </ul>            <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <div className="mr-4">
                  <ThemeToggle />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Toggle theme</span>
              </div>
              <UserNav />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

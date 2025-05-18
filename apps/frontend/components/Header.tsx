import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

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
    <header className={`fixed w-full z-10 ${isSticky ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold">Logo</a>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <a className="hover:text-primary">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:text-primary">About</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a className="hover:text-primary">Services</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="hover:text-primary">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

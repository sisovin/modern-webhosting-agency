import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Modern Webhosting Agency</h2>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <Link href="https://www.facebook.com">
                  <a target="_blank" rel="noopener noreferrer">
                    <img src="/assets/img/facebook-icon.png" alt="Facebook" className="h-6 w-6" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.twitter.com">
                  <a target="_blank" rel="noopener noreferrer">
                    <img src="/assets/img/twitter-icon.png" alt="Twitter" className="h-6 w-6" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com">
                  <a target="_blank" rel="noopener noreferrer">
                    <img src="/assets/img/instagram-icon.png" alt="Instagram" className="h-6 w-6" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com">
                  <a target="_blank" rel="noopener noreferrer">
                    <img src="/assets/img/linkedin-icon.png" alt="LinkedIn" className="h-6 w-6" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

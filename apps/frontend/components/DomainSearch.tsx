"use client";

import React, { useState } from 'react';

interface SearchResult {
  domain: string;
  available: boolean;
}

const DomainSearch = () => {
  const [domainName, setDomainName] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);

  const domainExtensions = [
    { extension: '.com', price: '$12.99/yr' },
    { extension: '.net', price: '$14.99/yr' },
    { extension: '.org', price: '$12.99/yr' },
    { extension: '.io', price: '$39.99/yr' },
    { extension: '.co', price: '$24.99/yr' },
    { extension: '.dev', price: '$17.99/yr' }
  ];
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!domainName) return;
    
    setIsSearching(true);
    
    // Simulating an API call with setTimeout
    setTimeout(() => {
      setIsSearching(false);
      setSearchResult({
        domain: domainName,
        available: Math.random() > 0.5 // Randomly determine availability
      });
    }, 1500);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Find Your Perfect Domain Name</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Search for available domain names and secure your online identity today.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2 mb-8">
            <input
              type="text"
              placeholder="Enter your domain name"
              className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={domainName}
              onChange={(e) => setDomainName(e.target.value)}
            />
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
              disabled={isSearching}
            >
              {isSearching ? 'Searching...' : 'Search'}
            </button>
          </form>
          
          {searchResult && (
            <div className="mb-8 p-4 border rounded-lg">
              <div className={`text-lg font-semibold ${searchResult.available ? 'text-green-600' : 'text-red-600'}`}>
                {searchResult.domain}
                {searchResult.available 
                  ? ' is available! 🎉' 
                  : ' is not available. Try another domain name.'}
              </div>
              {searchResult.available && (
                <button className="mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
                  Register Now
                </button>
              )}
            </div>
          )}
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {domainExtensions.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="font-semibold text-lg">{item.extension}</div>
                <div className="text-blue-600">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainSearch;

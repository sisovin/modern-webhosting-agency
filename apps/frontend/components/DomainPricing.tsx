"use client";

import React from 'react';

interface DomainPrice {
  extension: string;
  firstYear: number;
  renewal: number;
}

const domainPrices: DomainPrice[] = [
  { extension: '.com', firstYear: 9.99, renewal: 14.99 },
  { extension: '.net', firstYear: 11.99, renewal: 16.99 },
  { extension: '.org', firstYear: 12.99, renewal: 17.99 },
  { extension: '.io', firstYear: 29.99, renewal: 34.99 },
  { extension: '.co', firstYear: 19.99, renewal: 24.99 },
  { extension: '.app', firstYear: 14.99, renewal: 19.99 },
  { extension: '.dev', firstYear: 14.99, renewal: 19.99 },
  { extension: '.info', firstYear: 8.99, renewal: 13.99 },
  { extension: '.site', firstYear: 12.99, renewal: 17.99 },
  { extension: '.store', firstYear: 19.99, renewal: 24.99 },
];

const DomainPricing: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Domain Pricing</h2>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Domain Extension</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">First Year Price</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Renewal Price</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-600 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {domainPrices.map((domain, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{domain.extension}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${domain.firstYear.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${domain.renewal.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded transition duration-300">
                    Register
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="text-xl font-semibold mb-4">Domain Registration Benefits</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Free WHOIS Privacy Protection</li>
          <li>DNS Management Tools</li>
          <li>Domain Lock for Enhanced Security</li>
          <li>Email Forwarding</li>
          <li>24/7 Customer Support</li>
          <li>Auto-renewal Protection</li>
          <li>Easy Domain Transfers</li>
        </ul>
      </div>
    </div>
  );
};

export default DomainPricing;

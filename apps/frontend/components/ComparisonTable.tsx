"use client";

import React from 'react';

interface ComparisonFeature {
  name: string;
  basic: boolean | string;
  premium: boolean | string;
  business: boolean | string;
}

const features: ComparisonFeature[] = [
  { name: 'Websites', basic: '1', premium: 'Unlimited', business: 'Unlimited' },
  { name: 'SSD Storage', basic: '10 GB', premium: '50 GB', business: '100 GB' },
  { name: 'Bandwidth', basic: 'Unmetered', premium: 'Unmetered', business: 'Unmetered' },
  { name: 'Free Domain', basic: '1 year', premium: '1 year', business: '1 year' },
  { name: 'SSL Certificate', basic: true, premium: true, business: true },
  { name: 'Email Accounts', basic: '1', premium: 'Unlimited', business: 'Unlimited' },
  { name: 'MySQL Databases', basic: '5', premium: 'Unlimited', business: 'Unlimited' },
  { name: 'Automated Backups', basic: false, premium: 'Daily', business: 'Daily' },
  { name: 'Staging Environment', basic: false, premium: false, business: true },
  { name: 'CDN Integration', basic: false, premium: true, business: true },
  { name: 'GIT Integration', basic: false, premium: true, business: true },
  { name: 'Malware Scanning', basic: false, premium: 'Weekly', business: 'Daily' },
  { name: 'DDoS Protection', basic: 'Basic', premium: 'Advanced', business: 'Enterprise' },
  { name: 'SSH Access', basic: false, premium: true, business: true },
  { name: 'Performance Caching', basic: 'Basic', premium: 'Advanced', business: 'Enterprise' },
  { name: 'Customer Support', basic: '24/7 Standard', premium: '24/7 Priority', business: '24/7 Priority' },
];

const ComparisonTable: React.FC = () => {
  const renderValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      if (value) {
        return (
          <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      } else {
        return (
          <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      }
    } else {
      return <span>{value}</span>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-2">Hosting Plans Comparison</h2>
      <p className="text-center text-gray-600 mb-12">Compare our hosting plans to find what's right for you</p>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-4 px-6 text-left font-semibold text-gray-700">Feature</th>
              <th className="py-4 px-6 text-center font-semibold text-gray-700">Basic</th>
              <th className="py-4 px-6 text-center font-semibold text-blue-700 bg-blue-50">Premium</th>
              <th className="py-4 px-6 text-center font-semibold text-gray-700">Business</th>
            </tr>
            <tr>
              <th className="py-4 px-6 text-left font-semibold text-gray-700">Price</th>
              <td className="py-4 px-6 text-center">$4.99/mo</td>
              <td className="py-4 px-6 text-center font-semibold bg-blue-50">$9.99/mo</td>
              <td className="py-4 px-6 text-center">$19.99/mo</td>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="py-3 px-6 text-left">{feature.name}</td>
                <td className="py-3 px-6 text-center">{renderValue(feature.basic)}</td>
                <td className="py-3 px-6 text-center bg-blue-50">{renderValue(feature.premium)}</td>
                <td className="py-3 px-6 text-center">{renderValue(feature.business)}</td>
              </tr>
            ))}
            <tr>
              <td className="py-6 px-6"></td>
              <td className="py-6 px-6 text-center">
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded transition duration-300">
                  Choose Basic
                </button>
              </td>
              <td className="py-6 px-6 text-center bg-blue-50">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-300">
                  Choose Premium
                </button>
              </td>
              <td className="py-6 px-6 text-center">
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded transition duration-300">
                  Choose Business
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 text-center text-gray-600">
        <p>Need a custom solution? <a href="/contact" className="text-blue-600 font-semibold hover:underline">Contact our sales team</a></p>
      </div>
    </div>
  );
};

export default ComparisonTable;

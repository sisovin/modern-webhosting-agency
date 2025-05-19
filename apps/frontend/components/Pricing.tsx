"use client";

import React from 'react';
import Link from 'next/link';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$4.99",
      period: "per month",
      description: "Perfect for small personal projects and blogs",
      features: [
        "1 Website",
        "10 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "1 Database",
        "24/7 Support"
      ],
      isPopular: false,
      buttonText: "Get Started"
    },
    {
      name: "Professional",
      price: "$9.99",
      period: "per month",
      description: "Ideal for growing businesses and e-commerce",
      features: [
        "Unlimited Websites",
        "50 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Unlimited Databases",
        "24/7 Priority Support",
        "Free Domain for 1 Year",
        "Daily Backups"
      ],
      isPopular: true,
      buttonText: "Get Started"
    },
    {
      name: "Enterprise",
      price: "$24.99",
      period: "per month",
      description: "Advanced solution for high-traffic websites",
      features: [
        "Unlimited Websites",
        "100 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Unlimited Databases",
        "24/7 Premium Support",
        "Free Domain for 1 Year",
        "Daily Backups",
        "Dedicated IP Address",
        "Enhanced Performance"
      ],
      isPopular: false,
      buttonText: "Get Started"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Affordable Hosting Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose the perfect hosting plan for your needs with our flexible and scalable options.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-md overflow-hidden relative ${
                plan.isPopular ? 'transform md:-translate-y-4 ring-2 ring-blue-500 shadow-lg' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-blue-500 text-white py-1 px-4 text-sm font-semibold">Most Popular</div>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500"> {plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href="/hosting" className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.isPopular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}>
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

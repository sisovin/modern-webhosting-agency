"use client";

import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "🚀",
      title: "High Performance",
      description: "Our servers are optimized for speed with SSD storage and the latest hardware."
    },
    {
      icon: "🔒",
      title: "Enhanced Security",
      description: "Free SSL certificates, automated backups, and advanced firewall protection."
    },
    {
      icon: "⚡",
      title: "99.9% Uptime",
      description: "We guarantee reliable uptime to keep your website running smoothly."
    },
    {
      icon: "🔧",
      title: "Easy Management",
      description: "User-friendly control panel to manage your hosting without technical knowledge."
    },
    {
      icon: "📱",
      title: "Mobile Optimized",
      description: "All our hosting plans support responsive websites for mobile users."
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description: "Our dedicated team is available around the clock to assist you."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Hosting</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Experience top-tier hosting with features designed to make your website fast, secure, and easily manageable.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

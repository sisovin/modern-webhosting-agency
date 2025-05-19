"use client";

import React, { useState, useEffect } from 'react';

const Counter = () => {
  const stats = [
    { label: "Happy Clients", value: 5000, suffix: "+" },
    { label: "Websites Hosted", value: 12000, suffix: "+" },
    { label: "Uptime", value: 99.9, suffix: "%" },
    { label: "Support Tickets Solved", value: 45000, suffix: "+" }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const counterSection = document.getElementById('counter-section');
    if (counterSection) {
      observer.observe(counterSection);
    }

    return () => {
      if (counterSection) {
        observer.unobserve(counterSection);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      const duration = 2000; // 2 seconds for the animation
      const increment = stat.value / (duration / 20); // Update every 20ms

      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          const newValue = newCounts[index] + increment;
          
          // Cap at the target value
          newCounts[index] = Math.min(newValue, stat.value);
          
          // Clear interval if we've reached the target
          if (newCounts[index] >= stat.value) {
            clearInterval(intervals[index]);
          }
          
          return newCounts;
        });
      }, 20);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isVisible, stats]);

  return (
    <section id="counter-section" className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-blue-700 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">
                {stat.value.toString().includes('.') 
                  ? Math.floor(counts[index] * 10) / 10 // Handle decimals
                  : Math.floor(counts[index])}
                {stat.suffix}
              </div>
              <div className="text-xl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;

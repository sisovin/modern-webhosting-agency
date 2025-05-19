"use client";

import React from 'react';

const AboutHero = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-xl mb-4">
              Founded in 2010, Modern Webhosting Agency has been providing top-notch web hosting solutions to businesses of all sizes around the world.
            </p>
            <p className="text-xl">
              With a focus on reliability, security, and excellent customer service, we've grown to become one of the most trusted names in the industry.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-lg shadow-xl bg-white p-2 max-w-lg mx-auto">
              <img 
                src="/images/office.jpg" 
                alt="Our Modern Office" 
                className="w-full h-auto rounded"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/600x400/f0f4ff/3b82f6?text=Our+Modern+Office';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

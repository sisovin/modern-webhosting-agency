import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">About Us</h1>
      
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Our Story</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Founded in 2015, Modern Webhosting Agency has been providing top-notch web hosting solutions to businesses of all sizes around the world.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          With a focus on reliability, security, and excellent customer service, we've grown to become one of the most trusted names in the industry.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Our Mission</h2>
        <p className="text-gray-700 dark:text-gray-300">
          At Modern Webhosting Agency, our mission is to provide reliable and secure web hosting services to businesses and individuals around the world. We strive to offer the best customer support and the most affordable pricing in the industry.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Our Team</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Our team is composed of experienced professionals who are passionate about web hosting and dedicated to helping our customers succeed online. We work tirelessly to ensure that our services are always up-to-date and meet the highest standards of quality.
        </p>
      </div>
    </div>
  );
}

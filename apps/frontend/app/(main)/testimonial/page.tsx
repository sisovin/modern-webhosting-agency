import React from 'react';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const TestimonialPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100">Testimonials</h1>
      </header>
      <main>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-400 text-2xl font-medium">A</span>
                  {/* Replace with actual images when available */}
                  {/* <img src="/assets/img/testimonial-1.jpg" alt="Client 1" className="w-full h-full rounded-full object-cover" /> */}
                </div>
              </div>
              <p className="italic text-gray-700 dark:text-gray-300 mb-4">"Modern Webhosting Agency has been a game-changer for our business. Their reliable hosting services and excellent customer support have made all the difference."</p>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Alex Thompson</h3>
              <p className="text-blue-600 dark:text-blue-400">CEO, Innovate Solutions</p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-400 text-2xl font-medium">J</span>
                  {/* Replace with actual images when available */}
                  {/* <img src="/assets/img/testimonial-2.jpg" alt="Client 2" className="w-full h-full rounded-full object-cover" /> */}
                </div>
              </div>
              <p className="italic text-gray-700 dark:text-gray-300 mb-4">"We have been using Modern Webhosting Agency for over a year now, and we couldn't be happier. Their services are top-notch, and their team is always ready to help."</p>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Jessica Brown</h3>
              <p className="text-blue-600 dark:text-blue-400">CTO, Digital Frontiers</p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-400 text-2xl font-medium">M</span>
                  {/* Replace with actual images when available */}
                  {/* <img src="/assets/img/testimonial-3.jpg" alt="Client 3" className="w-full h-full rounded-full object-cover" /> */}
                </div>
              </div>
              <p className="italic text-gray-700 dark:text-gray-300 mb-4">"Modern Webhosting Agency has provided us with the best hosting experience we've ever had. Their uptime is incredible, and their support team is always available."</p>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Marcus Wilson</h3>
              <p className="text-blue-600 dark:text-blue-400">Marketing Director, Global Connect</p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Customer Stories</h2>
          <TestimonialCarousel />
        </section>
        
        <section className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Share Your Experience</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We value your feedback and would love to hear about your experience with Modern Webhosting Agency. Your testimonial could help others make the right choice for their hosting needs.
          </p>
          <div className="mt-6">
            <a 
              href="mailto:testimonials@modernwebhosting.com" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 active:bg-blue-900 focus:outline-none focus:border-blue-900 focus:ring ring-blue-300 disabled:opacity-25 transition ease-in-out duration-150"
            >
              Submit Your Testimonial
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TestimonialPage;

import React from 'react';
import TestimonialCarousel from '../../components/TestimonialCarousel';

const TestimonialPage = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="py-5">
        <h1 className="text-4xl font-bold text-center">Testimonials</h1>
      </header>
      <main className="my-10">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            <div className="text-center">
              <img src="/assets/img/testimonial-1.jpg" alt="Client 1" className="w-full h-auto rounded-lg" />
              <p className="mt-4">"Modern Webhosting Agency has been a game-changer for our business. Their reliable hosting services and excellent customer support have made all the difference."</p>
              <h3 className="text-xl font-semibold mt-4">Client 1</h3>
              <p className="text-gray-600">CEO, Company 1</p>
            </div>
            <div className="text-center">
              <img src="/assets/img/testimonial-2.jpg" alt="Client 2" className="w-full h-auto rounded-lg" />
              <p className="mt-4">"We have been using Modern Webhosting Agency for over a year now, and we couldn't be happier. Their services are top-notch, and their team is always ready to help."</p>
              <h3 className="text-xl font-semibold mt-4">Client 2</h3>
              <p className="text-gray-600">CTO, Company 2</p>
            </div>
            <div className="text-center">
              <img src="/assets/img/testimonial-3.jpg" alt="Client 3" className="w-full h-auto rounded-lg" />
              <p className="mt-4">"Modern Webhosting Agency has provided us with the best hosting experience we've ever had. Their uptime is incredible, and their support team is always available."</p>
              <h3 className="text-xl font-semibold mt-4">Client 3</h3>
              <p className="text-gray-600">Marketing Manager, Company 3</p>
            </div>
          </div>
        </section>
        <TestimonialCarousel />
        <section>
          <h2 className="text-2xl font-semibold">Share Your Experience</h2>
          <p className="mt-4">
            We value your feedback and would love to hear about your experience with Modern Webhosting Agency. Please send your testimonials to support@modernwebhosting.com.
          </p>
        </section>
      </main>
      <footer className="py-5 text-center">
        <p>&copy; {new Date().getFullYear()} Modern Webhosting Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TestimonialPage;

"use client";

import React, { useState, useEffect } from 'react';
import { getTestimonialSliderClass } from '@/lib/utils';
import './TestimonialCarousel.css';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Design Studio",
    role: "Founder & CEO",
    image: "/images/testimonials/testimonial-1.jpg",
    quote: "Switching to this hosting service was the best decision we made. Our website loads faster, and we've had zero downtime in the past year. The customer support team is incredibly responsive and knowledgeable.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Thompson",
    company: "E-commerce Solutions",
    role: "CTO",
    image: "/images/testimonials/testimonial-2.jpg",
    quote: "As an e-commerce platform, we need reliable hosting that can handle traffic spikes during sales events. This service has exceeded our expectations with its scalability and performance.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Davis",
    company: "Travel Blog",
    role: "Content Creator",
    image: "/images/testimonials/testimonial-3.jpg",
    quote: "I've tried several hosting providers before, but none offered the perfect balance of affordability and performance until I found this service. My blog has never run smoother.",
    rating: 4
  },
  {
    id: 4,
    name: "David Wilson",
    company: "Tech Innovations",
    role: "Lead Developer",
    image: "/images/testimonials/testimonial-4.jpg",
    quote: "The developer-friendly features like Git integration, staging environments, and SSH access make this hosting service stand out from the competition. It's perfect for our development workflow.",
    rating: 5
  },
  {
    id: 5,
    name: "Jessica Brown",
    company: "Digital Marketing Agency",
    role: "Marketing Director",
    image: "/images/testimonials/testimonial-5.jpg",
    quote: "We manage dozens of client websites, and having reliable hosting is crucial. The uptime guarantee and excellent support have made our lives so much easier. Highly recommended!",
    rating: 5
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      }
    }
    return stars;
  };
  
  return (    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-2 text-gray-800 dark:text-gray-100">What Our Customers Say</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Don't just take our word for it. Here's what users think about our services.</p>      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className={`flex transition-transform duration-500 ease-in-out ${getTestimonialSliderClass(currentSlide)}`}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="min-w-full">
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
                  <div className="flex flex-col md:flex-row items-center mb-6">
                    <div className="mb-4 md:mb-0 md:mr-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://via.placeholder.com/80';
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex mb-1">{renderStars(testimonial.rating)}</div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{testimonial.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <div className="flex justify-center mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 mx-1 rounded-full focus:outline-none ${
              currentSlide === index ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-600'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;

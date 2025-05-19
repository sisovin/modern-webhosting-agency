"use client";

import React, { useState } from 'react';
import apiClient from '@/lib/api';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (values: { name: string; email: string; subject: string; message: string }) => {
    try {
      await apiClient.post('/contact/', values);
      setSuccess('Your message has been sent successfully.');
    } catch (err) {
      setError('Failed to send your message. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4">
      <header className="py-5">
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      </header>
      <main className="my-10">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="mt-4">
            We would love to hear from you! Whether you have a question about our services, need assistance, or just want to give us feedback, feel free to reach out to us.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <ul className="list-disc list-inside mt-4">
            <li>Email: support@modernwebhosting.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Web Hosting Lane, Suite 100, Web City, WC 12345</li>
          </ul>
        </section>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}
        
        <ContactForm onSubmit={handleSubmit} />
        
        <section>
          <h2 className="text-2xl font-semibold">Follow Us</h2>
          <p className="mt-4">
            Stay connected with us on social media for the latest updates and promotions.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Facebook: <a href="https://facebook.com/modernwebhosting" className="text-blue-500">facebook.com/modernwebhosting</a></li>
            <li>Twitter: <a href="https://twitter.com/modernwebhost" className="text-blue-500">twitter.com/modernwebhost</a></li>
            <li>LinkedIn: <a href="https://linkedin.com/company/modernwebhosting" className="text-blue-500">linkedin.com/company/modernwebhosting</a></li>
          </ul>
        </section>
      </main>
      <footer className="py-5 text-center">
        <p>&copy; {new Date().getFullYear()} Modern Webhosting Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;

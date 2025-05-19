"use client";

import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    setMessage('Thank you for subscribing!');
  };

  return (
    <div className="newsletter">
      <h2 className="text-2xl font-semibold">Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input          type="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="border p-2 rounded w-full"
          required
        />
        <button type="submit" className="bg-primary text-white p-2 rounded mt-2 w-full">
          Subscribe
        </button>
      </form>
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </div>
  );
};

export default Newsletter;

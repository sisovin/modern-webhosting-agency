import React from 'react';

const ComparisonPage = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="py-5">
        <h1 className="text-4xl font-bold text-center">Comparison</h1>
      </header>
      <main className="my-10">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">Hosting Plan Comparison</h2>
          <p className="mt-4">
            Compare our hosting plans to find the one that best suits your needs. We offer a variety of plans with different features and pricing.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">Shared Hosting vs. VPS Hosting</h2>
          <p className="mt-4">
            Shared hosting is ideal for small websites and blogs, while VPS hosting offers more power and flexibility for growing websites.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">VPS Hosting vs. Dedicated Servers</h2>
          <p className="mt-4">
            VPS hosting provides dedicated resources and full control over your server, while dedicated servers offer the ultimate in performance and security.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="mt-4">
            If you have any questions or need assistance, please feel free to contact us at support@modernwebhosting.com.
          </p>
        </section>
      </main>
      <footer className="py-5 text-center">
        <p>&copy; {new Date().getFullYear()} Modern Webhosting Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ComparisonPage;

import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="py-5">
        <h1 className="text-4xl font-bold text-center">Welcome to Modern Webhosting Agency</h1>
      </header>
      <main className="my-10">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">Our Services</h2>
          <p className="mt-4">
            We offer a wide range of web hosting services to meet your needs, including shared hosting, VPS hosting, and dedicated servers.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
          <ul className="list-disc list-inside mt-4">
            <li>Reliable and secure hosting</li>
            <li>24/7 customer support</li>
            <li>Affordable pricing</li>
            <li>Easy-to-use control panel</li>
          </ul>
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

export default HomePage;

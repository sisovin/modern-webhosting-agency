import React from 'react';
import DomainPricing from '@/components/DomainPricing';

const DomainRegistrationPage = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="py-5">
        <h1 className="text-4xl font-bold text-center">Domain Registration</h1>
      </header>
      <main className="my-10">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">Register Your Domain</h2>
          <p className="mt-4">
            Secure your online presence by registering a domain with us. We offer a wide range of domain extensions to choose from.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">Why Register with Us?</h2>
          <ul className="list-disc list-inside mt-4">
            <li>Competitive pricing</li>
            <li>Easy domain management</li>
            <li>24/7 customer support</li>
            <li>Free domain privacy protection</li>
          </ul>
        </section>
        <DomainPricing />
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

export default DomainRegistrationPage;

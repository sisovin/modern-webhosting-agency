import React from 'react';
import HostingPlans from '@/components/HostingPlans';
import ComparisonTable from '@/components/ComparisonTable';

const HostingPlansPage = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="py-5">
        <h1 className="text-4xl font-bold text-center">Hosting Plans</h1>
      </header>
      <main className="my-10">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">Our Hosting Plans</h2>
          <p className="mt-4">
            We offer a variety of hosting plans to suit your needs, from shared hosting to dedicated servers. Choose the plan that's right for you.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">Shared Hosting</h2>
          <p className="mt-4">
            Our shared hosting plans are perfect for small websites and blogs. Enjoy reliable performance and 24/7 support at an affordable price.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">VPS Hosting</h2>
          <p className="mt-4">
            Our VPS hosting plans offer more power and flexibility for growing websites. Get dedicated resources and full control over your server.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">Dedicated Servers</h2>
          <p className="mt-4">
            Our dedicated servers provide the ultimate in performance and security. Ideal for large websites and applications with high traffic.
          </p>
        </section>
        <HostingPlans />
        <ComparisonTable />
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

export default HostingPlansPage;

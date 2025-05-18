import React from 'react';

const ContactPage = () => {
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

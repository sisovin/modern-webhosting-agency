import React from 'react';
import AboutHero from '../../components/AboutHero';
import Team from '../../components/Team';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="py-5">
        <h1 className="text-4xl font-bold text-center">About Us</h1>
      </header>
      <main className="my-10">
        <AboutHero />
        <Team />
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="mt-4">
            At Modern Webhosting Agency, our mission is to provide reliable and secure web hosting services to businesses and individuals around the world. We strive to offer the best customer support and the most affordable pricing in the industry.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">Our Team</h2>
          <p className="mt-4">
            Our team is composed of experienced professionals who are passionate about web hosting and dedicated to helping our customers succeed online. We work tirelessly to ensure that our services are always up-to-date and meet the highest standards of quality.
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

export default AboutPage;

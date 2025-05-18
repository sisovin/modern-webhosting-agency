import React from 'react';

const TeamPage = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="py-5">
        <h1 className="text-4xl font-bold text-center">Our Team</h1>
      </header>
      <main className="my-10">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">Meet Our Team</h2>
          <p className="mt-4">
            Our team is composed of experienced professionals who are passionate about web hosting and dedicated to helping our customers succeed online. We work tirelessly to ensure that our services are always up-to-date and meet the highest standards of quality.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
            <div className="text-center">
              <img src="/assets/img/team-1.jpg" alt="Team Member 1" className="w-full h-auto rounded-lg" />
              <h3 className="text-xl font-semibold mt-4">John Doe</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="text-center">
              <img src="/assets/img/team-2.jpg" alt="Team Member 2" className="w-full h-auto rounded-lg" />
              <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="text-center">
              <img src="/assets/img/team-3.jpg" alt="Team Member 3" className="w-full h-auto rounded-lg" />
              <h3 className="text-xl font-semibold mt-4">Michael Johnson</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="text-center">
              <img src="/assets/img/team-4.jpg" alt="Team Member 4" className="w-full h-auto rounded-lg" />
              <h3 className="text-xl font-semibold mt-4">Emily Davis</h3>
              <p className="text-gray-600">Marketing Manager</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Join Our Team</h2>
          <p className="mt-4">
            We are always looking for talented individuals to join our team. If you are passionate about web hosting and want to be part of a dynamic and innovative company, please send your resume to careers@modernwebhosting.com.
          </p>
        </section>
      </main>
      <footer className="py-5 text-center">
        <p>&copy; {new Date().getFullYear()} Modern Webhosting Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TeamPage;

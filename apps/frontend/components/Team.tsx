"use client";

import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO & Founder",
      bio: "John has over 15 years of experience in web hosting and server management.",
      imageUrl: "/images/team/john.jpg",
      placeholderImage: "https://via.placeholder.com/300x300/f0f4ff/3b82f6?text=John"
    },
    {
      name: "Jane Smith",
      position: "CTO",
      bio: "Jane is an expert in cloud infrastructure and cybersecurity.",
      imageUrl: "/images/team/jane.jpg",
      placeholderImage: "https://via.placeholder.com/300x300/f0f4ff/3b82f6?text=Jane"
    },
    {
      name: "Michael Johnson",
      position: "Customer Support Lead",
      bio: "Michael leads our 24/7 support team and ensures top-notch service for all clients.",
      imageUrl: "/images/team/michael.jpg",
      placeholderImage: "https://via.placeholder.com/300x300/f0f4ff/3b82f6?text=Michael"
    },
    {
      name: "Emily Brown",
      position: "Marketing Director",
      bio: "Emily brings creative marketing strategies to help us reach new customers.",
      imageUrl: "/images/team/emily.jpg",
      placeholderImage: "https://via.placeholder.com/300x300/f0f4ff/3b82f6?text=Emily"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.currentTarget.src = member.placeholderImage;
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
